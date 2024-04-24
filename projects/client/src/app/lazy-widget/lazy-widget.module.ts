import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadModuleDirective } from './load-module.directive';

@NgModule({
  declarations: [LoadModuleDirective],
  imports: [CommonModule],
  exports: [LoadModuleDirective]
})
export class LazyWidgetModule {}
