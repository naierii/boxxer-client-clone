import { ReadyMadeEditComponent } from './ready-made-edit/ready-made-edit.component';
import { ReadyMadeListComponent } from './ready-made-list/ready-made-list.component';
import { ReadyMadeSettingListComponent } from './ready-made-setting-list/ready-made-setting-list.component';
import { ReadyMadeSettingEditComponent } from './ready-made-setting-edit/ready-made-setting-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '@admin/core/guards/role.guard';

const routes: Routes = [
  {
    path: '',
    component: ReadyMadeListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin', 'seo']
    }
  },
  {
    path: 'new',
    component: ReadyMadeEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: ':id/edit',
    component: ReadyMadeEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin', 'seo']
    }
  },
  {
    path: 'settings',
    component: ReadyMadeSettingListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: 'settings/new',
    component: ReadyMadeSettingEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: 'settings/:id/edit',
    component: ReadyMadeSettingEditComponent,
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
export class ReadyMadeRoutingModule {}
