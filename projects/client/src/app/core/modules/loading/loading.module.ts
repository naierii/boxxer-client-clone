import { LoadingService } from './loading.service';
import { LoadingComponent } from './loading.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent]
})
export class LoadingModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoadingModule,
      providers: [LoadingService]
    };
  }
}
