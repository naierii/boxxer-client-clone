import { Router } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'bx-confirm-design-overwrite',
  templateUrl: './confirm-design-overwrite.component.html'
})
export class ConfirmDesignOverwriteComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ConfirmDesignOverwriteComponent>,
    private router: Router
  ) {}

  viewDesign() {
    this.router.navigate(['/customiser', this.data.product]);
    this.dialogRef.close();
  }
}
