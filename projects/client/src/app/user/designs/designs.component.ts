import { untilComponentDestroyed } from '@global/untilDestroy';
import { CustomDesign } from '@global/models/custom-design';
import { ApiService } from '@app/core/services/api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { map, switchMap } from 'rxjs/operators';
import { ConfirmDeleteComponent } from '@app/user/confirm-delete/confirm-delete.component';
import { Router } from '@angular/router';
import { DesignCopyService } from '@app/shared/services/design-copy.service';
import { LoadingService } from '@app/core/modules/loading/loading.service';

@Component({
  selector: 'bx-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.scss'],
})
export class DesignsComponent implements OnInit, OnDestroy {
  designs$: Observable<any[]>;
  constructor(
    private api: ApiService,
    private dialog: MatDialog,
    private router: Router,
    private designCopy: DesignCopyService,
    private loading: LoadingService
  ) {}

  ngOnInit() {
    this.getDesigns();
  }

  getDesigns() {
    this.designs$ = this.api
      .find('custom-design', { $sort: { createdAt: -1 } })
      .pipe(map((resp: any) => resp.data));
  }

  copyDesign(design: any) {
    this.designCopy
      .reorderDesign(design)
      .pipe(untilComponentDestroyed(this))
      .subscribe((resp) => {
        if (resp) {
          this.router.navigate(['/customiser', design.product._id]);
        } else {
          this.loading.hide();
        }
      });
  }

  editDesign(design: any) {
    this.designCopy
      .editDesign(design)
      .pipe(untilComponentDestroyed(this))
      .subscribe(() => {});
  }

  deleteDesign(design: CustomDesign) {
    const modalRef = this.dialog.open(ConfirmDeleteComponent, {
      data: { title: `Custom Design` },
      minWidth: '300px',
      autoFocus: false,
    });
    modalRef
      .afterClosed()
      .pipe(
        switchMap((confirmed) =>
          confirmed ? this.api.remove('custom-design', design._id) : of(null)
        ),
        untilComponentDestroyed(this)
      )
      .subscribe((result) => {
        if (result) {
          this.designs$ = this.designs$.pipe(
            map((designs) => designs.filter((a) => a._id !== design._id))
          );
        }
      });
  }

  ngOnDestroy() {}
}
