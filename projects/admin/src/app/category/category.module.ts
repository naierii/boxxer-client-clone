import { SharedModule } from '@admin/shared/shared.module';
import { TermService } from './term.service';
import { CategoryService } from './category.service';
import { SocketService } from '@admin/shared/services/socket.service';
import { NgModule } from '@angular/core';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryItemComponent } from './category-list/category-item.component';
import { TermListComponent } from './term-list/term-list.component';
import { TermEditComponent } from './term-edit/term-edit.component';
import { TermItemComponent } from './term-list/term-item.component';

@NgModule({
  imports: [SharedModule, CategoryRoutingModule],
  declarations: [
    CategoryListComponent,
    CategoryEditComponent,
    CategoryItemComponent,
    TermListComponent,
    TermEditComponent,
    TermItemComponent
  ],
  providers: [SocketService, CategoryService, TermService]
})
export class CategoryModule {}
