import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { DesignsComponent } from './designs/designs.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { PasswordComponent } from './password/password.component';
import { AddressesComponent } from './addresses/addresses.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardAddComponent } from './dashboard-add/dashboard-add.component';
import { CardAddComponent } from './cards/card-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material/material.module';
import { AddressAddComponent } from './addresses/address-add.component';
import { AddressFormModule } from '@app/shared/modules/address-form/address-form.module';
import { ProfileAddComponent } from './profiles/profile-add.component';
import { OrderDetailComponent } from './orders/order-detail.component';
import { BreadcrumbsModule } from '@dottodot/breadcrumbs';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    AddressFormModule,
    BreadcrumbsModule
  ],
  declarations: [
    DashboardComponent,
    OrdersComponent,
    DesignsComponent,
    ProfilesComponent,
    PasswordComponent,
    AddressesComponent,
    CardsComponent,
    DashboardAddComponent,
    CardAddComponent,
    AddressAddComponent,
    ProfileAddComponent,
    OrderDetailComponent,
    ConfirmDeleteComponent
  ],
  entryComponents: [ConfirmDeleteComponent]
})
export class UserModule {}
