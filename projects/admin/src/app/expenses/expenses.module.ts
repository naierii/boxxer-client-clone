import { ExpensesItemComponent } from './expenses-list/expenses-item.component';
import { NgModule } from '@angular/core';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { ExpensesEditComponent } from './expenses-edit/expenses-edit.component';
import { SharedModule } from '@admin/shared/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ExpensesPopupComponent } from './expenses-popup/expenses-popup.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ExpensesViewComponent } from './expenses-view/expenses-view.component';

@NgModule({
  imports: [
    SharedModule,
    ExpensesRoutingModule,
    BsDatepickerModule,
    ModalModule.forRoot()
  ],
  declarations: [
    ExpensesListComponent,
    ExpensesItemComponent,
    ExpensesEditComponent,
    ExpensesPopupComponent,
    ExpensesViewComponent
  ],
  entryComponents: [ExpensesPopupComponent]
})
export class ExpensesModule {}
