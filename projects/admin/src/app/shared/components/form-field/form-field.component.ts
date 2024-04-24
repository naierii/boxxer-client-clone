import { FormControlName } from '@angular/forms';
import { Component, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'bx-form-field',
  templateUrl: './form-field.component.html'
})
export class FormFieldComponent {
  @Input() label: string;
  @ContentChild(FormControlName, { static: false })
  state: FormControlName;
}
