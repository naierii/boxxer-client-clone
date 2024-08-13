import { JobCardDetailComponent } from './job-card-detail/job-card-detail.component';
import { JobCardListComponent } from './job-card-list/job-card-list.component';
import { RoleGuard } from '@admin/core/guards/role.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  {
    path: '',
    component: OrderListComponent,
    canActivate: [RoleGuard],
    data: {
      title: 'Orders',
      roles: ['admin','order_commenter']
    }
  },
  {
    path: 'job-card',
    component: JobCardListComponent,
    canActivate: [RoleGuard],
    data: {
      title: 'Orders',
      roles: ['admin','order_commenter']
    }
  },
  {
    path: 'job-card/:id/:jobid',
    component: JobCardDetailComponent,
    canActivate: [RoleGuard],
    data: {
      title: 'Orders',
      roles: ['admin','order_commenter']
    }
  },
  {
    path: 'new',
    component: OrderEditComponent,
    canActivate: [RoleGuard],
    data: {
      title: 'Orders',
      roles: ['admin']
    }
  },
  {
    path: ':id',
    component: OrderDetailComponent,
    canActivate: [RoleGuard],
    data: {
      title: 'Orders',
      roles: ['order_commenter','admin']
    }
  },
  {
    path: ':id/edit',
    component: OrderEditComponent,
    canActivate: [RoleGuard],
    data: {
      title: 'Orders',
      roles: ['admin']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}
