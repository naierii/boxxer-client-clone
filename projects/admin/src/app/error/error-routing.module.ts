import { NotfoundComponent } from './notfound/notfound.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'forbidden',
    component: ForbiddenComponent,
    data: {
      title: 'Access denied'
    }
  },
  {
    path: 'notfound',
    component: NotfoundComponent,
    data: {
      title: 'Page not found'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule {}
