import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'bx-forbidden',
  templateUrl: './forbidden.component.html'
})
export class ForbiddenComponent {
  constructor(public _location: Location) {}
}
