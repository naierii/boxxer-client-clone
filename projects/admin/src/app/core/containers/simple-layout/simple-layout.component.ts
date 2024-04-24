import { Component } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'bx-dashboard',
  template:
    '<router-outlet></router-outlet><toaster-container [toasterconfig]="toasterconfig"></toaster-container>'
})
export class SimpleLayoutComponent {
  public toasterconfig: ToasterConfig = new ToasterConfig({
    tapToDismiss: true,
    timeout: 5000
  });
}
