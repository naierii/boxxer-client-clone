import { CustomDesign } from '@global/models/custom-design';
import { Order } from '@global/models/order';
import { WindowRefService } from './../../window-ref.service';
import { environment } from '@env/environment';
import { Component, OnInit, Inject, OnDestroy, NgZone,TemplateRef  } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { ActivatedRoute } from '@angular/router';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { switchMap, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Product } from '@global/models/product';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'bx-job-card-detail',
  templateUrl: './job-card-detail.component.html',
  styleUrls: ['./job-card-detail.component.scss'],
  providers: [
    {
      provide: 'JobCardService',
      useClass: SocketService
    }
  ]
})
export class JobCardDetailComponent implements OnInit, OnDestroy {
  order: any;
  order$: Observable<any>;
  update$: Subject<boolean> = new Subject<boolean>();
  print: boolean;
  modalRef?: BsModalRef;
  imagelink?: string;
  scaleValue=100
  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    @Inject('JobCardService') protected service: SocketService,
    private winRef: WindowRefService,
    private zone: NgZone
  ) {
    service.setup('job-card');
  }

  ngOnInit() {
    this.order$ = this.route.params.pipe(
      untilComponentDestroyed(this),
      switchMap((params: any) => {
        return this.service.findOne(
          params['id'],
          { line_item: params['jobid'] },
          false
        );
      }),
      tap((resp: any) => {
        this.order = resp;
        this.zone.runOutsideAngular(() => {
          this.printOrder();
        });
      })
    );
    this.update$
      .pipe(
        untilComponentDestroyed(this),
        switchMap((params: any) => {
          return this.service.findOne(
            this.order.orderid,
            { line_item: this.order.item._id },
            false
          );
        }),
        tap((resp: any) => {
          this.order = resp;
        })
      )
      .subscribe();
  }

  getReadyMadeImage(variation: Product) {
    if (!variation) {
      return null;
    }
    if (variation.image) {
      return variation.image.key;
    } else if (variation.product_display.image) {
      return variation.product_display.image.key;
    } else if (variation.product_display.images.length) {
      return variation.product_display.images[0].key;
    } else {
      return null;
    }
  }

  customSizePrice(design: CustomDesign) {
    return (design.original_price / 100) * design.sizing.price_adjust;
  }

  printJob(e) {
    e.preventDefault();
    this.winRef.nativeWindow.open(
      `${environment.admin}/orders/job-card/${this.order.orderid}/${this.order.item._id
      }?print=true`,
      '_blank',
      'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no'
    );
  }

  printOrder() {
    this.route.queryParams
      .pipe(untilComponentDestroyed(this))
      .subscribe(resp => {
        if (resp['print'] === 'true') {
          this.print = true;
          setTimeout(() => {
            this.printNoLoad();
          }, 1000);
        }
      });
  }

  printNoLoad(e?: any) {
    if (e) {
      e.preventDefault();
    }
    this.winRef.nativeWindow.focus();
    this.winRef.nativeWindow.print();
    this.winRef.nativeWindow.close();
  }

  get editLink() {
    return `${environment.site}/customiser/${this.order.item.custom_design.product._id
      }/design?admin=${this.order.item.custom_design.token}&order=${this.order.orderid
      }&item=${this.order.item._id}`;
  }

  orderUpdated(order: Order) {
    this.update$.next(true);
  }

  openModal(template: TemplateRef<void>,link:string) {
    this.scaleValue=100    
    this.imagelink = `https://img.boxxerworld.com/${link}`;
    this.modalRef = this.modalService.show(template,Object.assign({}, { class: 'modal-lg' }));
  }
  zoomIn() {
    if (this.scaleValue < 250) {
      this.scaleValue += 1; // Increase scale
    }
  }

  zoomOut() {
    if (this.scaleValue > 80) {
      this.scaleValue -= 1;
    }
  }
  onScroll(event: WheelEvent): void {
    event.preventDefault(); // Prevent default scrolling behavior
    if (event.deltaY < 0) {
      // Zoom in
      this.zoomIn()
    } else {
      // Zoom out
      this.zoomOut()
    }
  }
  getScaleStyle() {
    return {
      transform: `scale(${this.scaleValue}%)`,
    };
  }
  ngOnDestroy() {
    this.order = null;
  }
}
