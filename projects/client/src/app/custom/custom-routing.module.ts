import { CustomDetailComponent } from './custom-detail/custom-detail.component';
import { CustomListComponent } from './custom-list/custom-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shorts-trunks',
    pathMatch: 'full'
  },
  {
    path: ':catid',
    component: CustomListComponent
  },
  {
    path: ':catid/:slug',
    component: CustomDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CustomRoutingModule {}
