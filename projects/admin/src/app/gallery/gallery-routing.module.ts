import { GalleryEditComponent } from './gallery-edit/gallery-edit.component';
import { RoleGuard } from '@admin/core/guards/role.guard';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GalleryListComponent,
    canActivate: [RoleGuard],
    data: {
      title: 'Gallery',
      roles: ['admin', 'seo']
    }
  },
  {
    path: 'new',
    component: GalleryEditComponent,
    canActivate: [RoleGuard],
    data: {
      title: 'Gallery',
      roles: ['admin']
    }
  },
  {
    path: ':id/edit',
    component: GalleryEditComponent,
    canActivate: [RoleGuard],
    data: {
      title: 'Gallery',
      roles: ['admin', 'seo']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule {}
