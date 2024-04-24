import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'shorts-trunks',
  pathMatch: 'full'
}, {
  path: ':catid',
  component: GalleryListComponent
}, {
  path: ':catid/:slug',
  component: GalleryDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GalleryRoutingModule { }
