import { CustomStylesEditComponent } from './custom-styles-edit/custom-styles-edit.component';
import { CustomStylesListComponent } from './custom-styles-list/custom-styles-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '@admin/core/guards/role.guard';

const routes: Routes = [
  {
    path: '',
    component: CustomStylesListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: 'new',
    component: CustomStylesEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: ':id/edit',
    component: CustomStylesEditComponent,
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
export class CustomStylesRoutingModule {}
