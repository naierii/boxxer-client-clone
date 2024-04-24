import { Component } from '@angular/core';
import { VERSION } from '@env/version';

@Component({
  selector: 'bx-footer',
  templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {
  version = VERSION.version;
}
