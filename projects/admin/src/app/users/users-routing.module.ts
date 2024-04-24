import { UserEditComponent } from './user-edit/user-edit.component';
import { RoleGuard } from '@admin/core/guards/role.guard';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: 'new',
    component: UserEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: ':id/edit',
    component: UserEditComponent,
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
export class UsersRoutingModule {}
