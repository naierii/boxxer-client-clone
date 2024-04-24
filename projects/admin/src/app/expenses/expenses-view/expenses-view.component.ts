import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { StateService } from '@admin/core/services/state.service';
import { ConfirmModalComponent } from '@admin/shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'bx-expenses-view',
  templateUrl: './expenses-view.component.html',
  providers: [
    {
      provide: 'ExpenseService',
      useClass: SocketService,
    },
  ],
})
export class ExpensesViewComponent implements OnInit {
  expense$: any;
  @ViewChild('confirmModal', { static: true })
  confirmModal: ConfirmModalComponent;
  constructor(
    public state: StateService,
    @Inject('ExpenseService') private service: SocketService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    service.setup('expense');
  }

  ngOnInit() {
    this.expense$ = this.route.params.pipe(
      switchMap((params: any) => {
        return this.service.findOne(params['id']);
      })
    );
  }

  deleteConfirm(id: string) {
    this.confirmModal.show(id);
  }

  deleteItem(id: string) {
    this.service.removeSub(id).subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
      this.confirmModal.hide();
    });
  }
}
