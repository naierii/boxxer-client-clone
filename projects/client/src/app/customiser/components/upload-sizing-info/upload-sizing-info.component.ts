import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'bx-upload-sizing-info',
  templateUrl: './upload-sizing-info.component.html'
})
export class UploadSizingInfoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}