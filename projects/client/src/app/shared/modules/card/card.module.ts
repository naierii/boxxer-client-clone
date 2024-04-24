import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComponent,
  CardImageDirective,
  CardFooterDirective,
  CardContentDirective,
  CardTitleDirective
} from './card.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    CardComponent,
    CardContentDirective,
    CardTitleDirective,
    CardFooterDirective,
    CardImageDirective
  ],
  declarations: [
    CardComponent,
    CardContentDirective,
    CardTitleDirective,
    CardFooterDirective,
    CardImageDirective
  ]
})
export class CardModule {}
