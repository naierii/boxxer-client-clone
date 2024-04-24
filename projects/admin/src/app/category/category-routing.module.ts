import { TermEditComponent } from './term-edit/term-edit.component';
import { TermListComponent } from './term-list/term-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { RoleGuard } from '@admin/core/guards/role.guard';
import { CategoryListComponent } from './category-list/category-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin', 'seo']
    }
  },
  {
    path: 'new',
    component: CategoryEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: ':id/edit',
    component: CategoryEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin', 'seo']
    }
  },
  {
    path: ':catid/terms',
    component: TermListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin', 'seo']
    }
  },
  {
    path: ':catid/terms/new',
    component: TermEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: ':catid/terms/:id/edit',
    component: TermEditComponent,
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
export class CategoryRoutingModule {}
