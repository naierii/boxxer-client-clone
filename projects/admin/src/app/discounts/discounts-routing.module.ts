import { DiscountsEditComponent } from './discounts-edit/discounts-edit.component';
import { DiscountsListComponent } from './discounts-list/discounts-list.component';
import { RoleGuard } from '@admin/core/guards/role.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DiscountsListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: 'new',
    component: DiscountsEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: ':id/edit',
    component: DiscountsEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscountsRoutingModule {}
