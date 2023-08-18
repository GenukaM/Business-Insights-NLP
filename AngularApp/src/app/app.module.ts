import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { SignupComponent } from './signup/signup.component';
import { PaymentEntryComponent } from './payment-entry/payment-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FlightDetailsComponent,
    SignupComponent,
    PaymentEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
