import { ToasterConfig } from 'angular2-toaster';
import { Component } from '@angular/core';
import { StateService } from '@admin/core/services/state.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'bx-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent {
  public toasterconfig: ToasterConfig = new ToasterConfig({
    tapToDismiss: true,
    timeout: 5000
  });
  constructor(public state: StateService, private swUpdate: SwUpdate) {}
  reloadPage() {
    if (this.swUpdate && this.swUpdate.isEnabled) {
      this.swUpdate.activateUpdate().then(() => window.location.reload());
    } else {
      this.state.update = false;
    }
  }
}
