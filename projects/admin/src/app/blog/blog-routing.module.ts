import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { RoleGuard } from '@admin/core/guards/role.guard';
import { BlogListComponent } from './blog-list/blog-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin', 'seo']
    }
  },
  {
    path: 'new',
    component: BlogEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: ':id/edit',
    component: BlogEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin', 'seo']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
