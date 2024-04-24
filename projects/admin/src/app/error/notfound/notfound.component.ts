import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'bx-notfound',
  templateUrl: './notfound.component.html'
})
export class NotfoundComponent {
  constructor(public _location: Location) {}
}
