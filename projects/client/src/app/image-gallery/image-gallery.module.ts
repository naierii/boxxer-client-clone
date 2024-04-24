import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { RouterModule } from '@angular/router';
import { ImageGalleryControllerComponent } from './image-gallery-controller/image-gallery-controller.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ImageGalleryComponent, ImageGalleryControllerComponent],
  exports: [ImageGalleryComponent, ImageGalleryControllerComponent]
})
export class ImageGalleryModule {}
