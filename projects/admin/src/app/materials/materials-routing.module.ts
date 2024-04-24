import { MaterialsEditComponent } from './materials-edit/materials-edit.component';
import { MaterialsListComponent } from './materials-list/materials-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '@admin/core/guards/role.guard';
import { MaterialsGroupListComponent } from './materials-group-list/materials-group-list.component';
import { MaterialsGroupEditComponent } from './materials-group-edit/materials-group-edit.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialsListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: 'new',
    component: MaterialsEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: ':id/edit',
    component: MaterialsEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: 'groups',
    component: MaterialsGroupListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: 'groups/new',
    component: MaterialsGroupEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: 'groups/:id/edit',
    component: MaterialsGroupEditComponent,
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
export class MaterialsRoutingModule {}
