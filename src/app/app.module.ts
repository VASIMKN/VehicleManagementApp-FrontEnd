import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { DriverComponent } from './components/driver/driver.component';
import { UserComponent } from './components/user/user.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    DriverComponent,
    UserComponent,
    VehicleComponent,
    CustomerComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
