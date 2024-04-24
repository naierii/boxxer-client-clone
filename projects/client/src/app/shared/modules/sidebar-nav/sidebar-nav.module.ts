import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from '@app/shared/modules/card/card.module';

import {
  SidebarNavComponent,
  SidebarNavItemComponent
} from './sidebar-nav.component';

@NgModule({
  imports: [CommonModule, RouterModule, CardModule],
  exports: [SidebarNavComponent, SidebarNavItemComponent],
  declarations: [SidebarNavComponent, SidebarNavItemComponent]
})
export class SidebarNavModule {}
