import { OrderEditService } from '@admin/order/order-edit.service';
import { EmailContent } from '@global/models/email-content';
import { Observable } from 'rxjs';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SocketService } from '@admin/shared/services/socket.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, take } from 'rxjs/operators';
import { Order } from '@global/models/order';
import { TINY_RICHTEXT } from '@admin/tinymce';
import { ImageService } from '@admin/core/services/image.service';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Production } from '@global/models/production';

@Component({
  selector: 'bx-production-pictures-add',
  templateUrl: './production-pictures-add.component.html',
  styles: [],
  providers: [
    {
      provide: 'ProductionService',
      useClass: SocketService,
    },
    {
      provide: 'EmailService',
      useClass: SocketService,
    },
  ],
})
export class ProductionPicturesAddComponent implements OnInit, OnDestroy {
  emails$: Observable<EmailContent[]>;
  productionForm: FormGroup;
  public saving = false;
  public order: Order;
  tinymce = TINY_RICHTEXT;
  dropzone_config = {
    resizeWidth: 1200,
    params: {
      folder: 'production',
    },
  };
  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    @Inject('ProductionService') private productionService: SocketService,
    @Inject('EmailService') private emailService: SocketService,
    public editService: OrderEditService,
    private imageService: ImageService
  ) {
    productionService.setup('production');
    emailService.setup('email-content');
    this.emails$ = emailService.find({ type: 'Production' }).pipe(
      map((resp: any) => {
        const emails = resp.data;
        emails.push({
          title: 'Picture No Email',
          description: '',
        });
        return emails;
      })
    );
  }

  ngOnInit() {
    this.productionForm = this.fb.group({
      description: [],
      order: [],
      orderid: [],
      type: [],
    });
  }

  setUp() {
    if (this.order) {
      this.productionForm.get('order').setValue(this.order._id);
      this.productionForm.get('orderid').setValue(this.order.orderid);
    }
  }

  emailSelected(value: EmailContent) {
    let intro = '<p>Hello</p>';
    if (this.order.shipping.firstName) {
      intro = `<p>Dear ${this.order.shipping.firstName}</p>`;
    }

    this.productionForm.get('description').setValue(intro + value.description);
  }

  sendEmail(data: any) {
    this.saving = true;
    data.images = this.imageService.images.map((i) => i._id);
    this.productionService
      .create(data)
      .pipe(take(1), untilComponentDestroyed(this))
      .subscribe(
        (production: Production) => {
          this.editService.productions.push(production);
          this.hideProductionModal();
          this.saving = false;
        },
        (err) => {
          this.saving = false;
        }
      );
  }

  hideProductionModal() {
    this.bsModalRef.hide();
  }

  ngOnDestroy() {}
}
