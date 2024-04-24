import { GraphicPriceEditComponent } from './graphic-price-edit/graphic-price-edit.component';
import { RoleGuard } from './../core/guards/role.guard';
import { GraphicPriceListComponent } from './graphic-price-list/graphic-price-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GraphicPriceListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: 'new',
    component: GraphicPriceEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: ':id/edit',
    component: GraphicPriceEditComponent,
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
export class GraphicPriceRoutingModule { }
