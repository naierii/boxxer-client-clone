import { LogosEditComponent } from './logos-edit/logos-edit.component';
import { LogosListComponent } from './logos-list/logos-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '@admin/core/guards/role.guard';

const routes: Routes = [
  {
    path: '',
    component: LogosListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: 'new',
    component: LogosEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: ':id/edit',
    component: LogosEditComponent,
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
export class LogosRoutingModule {}
