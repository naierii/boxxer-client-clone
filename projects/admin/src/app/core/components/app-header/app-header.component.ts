import { Component } from '@angular/core';
import { AuthService } from '@admin/core/services/auth.service';

@Component({
  selector: 'bx-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  constructor(private auth: AuthService) {}
  logout() {
    this.auth.logout();
  }
}
