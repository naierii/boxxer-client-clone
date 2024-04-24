import { Directive, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[bxFormValid]'
})
export class FormValidDirective {
  @Input() form: NgForm;
  constructor() {}
}
