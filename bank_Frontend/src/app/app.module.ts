import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { DetailsComponent } from './details/details.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { WithdrawMoneyComponent } from './withdraw-money/withdraw-money.component';
import { DepositMoneyComponent } from './deposit-money/deposit-money.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminloginComponent,
    CustomerloginComponent,
    CustomerListComponent,
    AdminComponent,
    CustomerComponent,
    DetailsComponent,
    CreateCustomerComponent,
    WithdrawMoneyComponent,
    DepositMoneyComponent,
    TransferMoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
