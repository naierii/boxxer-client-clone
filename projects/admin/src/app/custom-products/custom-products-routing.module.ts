import { CustomProductsSettingsEditComponent } from './custom-products-settings-edit/custom-products-settings-edit.component';
import { CustomProductsSettingsListComponent } from './custom-products-settings-list/custom-products-settings-list.component';
import { CustomProductsEditComponent } from './custom-products-edit/custom-products-edit.component';
import { CustomProductsListComponent } from './custom-products-list/custom-products-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '@admin/core/guards/role.guard';

const routes: Routes = [
  {
    path: '',
    component: CustomProductsListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin', 'seo']
    }
  },
  {
    path: 'new',
    component: CustomProductsEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: ':id/edit',
    component: CustomProductsEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin', 'seo']
    }
  },
  {
    path: 'settings',
    component: CustomProductsSettingsListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: 'settings/new',
    component: CustomProductsSettingsEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: 'settings/:id/edit',
    component: CustomProductsSettingsEditComponent,
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
export class CustomProductsRoutingModule {}
