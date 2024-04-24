import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'shorts-trunks',
  pathMatch: 'full'
}, {
  path: ':catid',
  component: ProductListComponent
}, {
  path: ':catid/:slug',
  component: ProductDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
