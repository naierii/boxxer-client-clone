import { AuthService } from '@app/core/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'bx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  menus = [
    {
      title: 'Your Orders',
      description: 'View previous orders',
      icon: 'box',
      url: 'orders'
    },
    {
      title: 'Your Designs',
      description: `View designs you've ordered or saved and reorder.`,
      icon: 'pen',
      url: 'designs'
    },
    {
      title: 'Boxxer Profiles',
      description: `Manange your boxxer profiles, to use when creating designs`,
      icon: 'boxing-glove',
      url: 'profiles'
    },
    {
      title: 'Login and Security',
      description: `Update your password.`,
      icon: 'lock-alt',
      url: 'password'
    },
    {
      title: 'Your Addresses',
      description: `Edit address`,
      icon: 'map-marker',
      url: 'addresses'
    },
    {
      title: 'Payment Options',
      description: `Edit or add payment methods`,
      icon: 'credit-card-front',
      url: 'cards'
    }
  ];
  constructor(private auth: AuthService) {}
  logout() {
    this.auth.logout();
  }
}
