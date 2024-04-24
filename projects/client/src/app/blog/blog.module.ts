import { NgModule } from '@angular/core';
import { CardModule } from '@app/shared/modules/card/card.module';

import { SharedModule } from './../shared/shared.module';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogItemComponent } from './blog-list/blog-item.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [SharedModule, BlogRoutingModule, CardModule],
  declarations: [BlogListComponent, BlogDetailComponent, BlogItemComponent],
  providers: []
})
export class BlogModule {}
