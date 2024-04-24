import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomSettingsComponent } from './custom-settings.component';

const routes: Routes = [
  {
    path: '',
    component: CustomSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomSettingsRoutingModule {}
