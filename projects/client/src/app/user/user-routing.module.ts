import { OrderDetailComponent } from './orders/order-detail.component';
import { ProfileAddComponent } from './profiles/profile-add.component';
import { AddressAddComponent } from './addresses/address-add.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { PasswordComponent } from './password/password.component';
import { DesignsComponent } from './designs/designs.component';
import { CardsComponent } from './cards/cards.component';
import { AddressesComponent } from './addresses/addresses.component';
import { OrdersComponent } from './orders/orders.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardAddComponent } from './cards/card-add.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'addresses',
    component: AddressesComponent,
    data: {
      breadcrumb: 'Addresses'
    }
  },
  {
    path: 'addresses/add',
    component: AddressAddComponent,
    data: {
      breadcrumb: 'Add Address'
    }
  },
  {
    path: 'addresses/edit/:id',
    component: AddressAddComponent,
    data: {
      breadcrumb: 'Edit Address'
    }
  },
  {
    path: 'cards',
    component: CardsComponent,
    data: {
      breadcrumb: 'Cards'
    }
  },
  {
    path: 'cards/add',
    component: CardAddComponent,
    data: {
      breadcrumb: 'Add Card'
    }
  },
  {
    path: 'designs',
    component: DesignsComponent,
    data: {
      breadcrumb: 'Designs'
    }
  },
  {
    path: 'orders',
    component: OrdersComponent,
    data: {
      breadcrumb: 'Orders'
    }
  },
  {
    path: 'orders/:orderid',
    component: OrderDetailComponent,
    data: {
      breadcrumb: 'Orders'
    }
  },
  {
    path: 'password',
    component: PasswordComponent,
    data: {
      breadcrumb: 'Update Password'
    }
  },
  {
    path: 'profiles',
    component: ProfilesComponent,
    data: {
      breadcrumb: 'Profiles'
    }
  },
  {
    path: 'profiles/add',
    component: ProfileAddComponent,
    data: {
      breadcrumb: 'Add Profile'
    }
  },
  {
    path: 'profiles/edit/:id',
    component: ProfileAddComponent,
    data: {
      breadcrumb: 'Edit Profile'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UserRoutingModule {}
