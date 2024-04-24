import { PageEditComponent } from './page-edit/page-edit.component';
import { RoleGuard } from '@admin/core/guards/role.guard';
import { PageListComponent } from './page-list/page-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageListComponent,
    canActivate: [RoleGuard],
    data: {
      title: 'Pages',
      roles: ['admin', 'seo']
    }
  },
  {
    path: 'new',
    component: PageEditComponent,
    canActivate: [RoleGuard],
    data: {
      title: 'Pages',
      roles: ['admin']
    }
  },
  {
    path: ':id/edit',
    component: PageEditComponent,
    canActivate: [RoleGuard],
    data: {
      title: 'Pages',
      roles: ['admin', 'seo']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {}
