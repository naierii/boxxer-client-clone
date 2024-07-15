import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '@app/shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  imports: [SharedModule, HomeRoutingModule,CarouselModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
