import { RoleGuard } from '@admin/core/guards/role.guard';
import { CustomNamesEditComponent } from './custom-names-edit/custom-names-edit.component';
import { CustomNamesListComponent } from './custom-names-list/custom-names-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CustomNamesListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: 'new',
    component: CustomNamesEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: ':id/edit',
    component: CustomNamesEditComponent,
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
export class CustomNamesRoutingModule {}
