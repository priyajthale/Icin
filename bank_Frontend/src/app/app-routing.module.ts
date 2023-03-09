import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { DetailsComponent } from './details/details.component';
import { WithdrawMoneyComponent } from './withdraw-money/withdraw-money.component';
import { DepositMoneyComponent } from './deposit-money/deposit-money.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';

const routes: Routes = [
  {path:'adminlogin',component:AdminloginComponent},
  {path:'customerlogin',component:CustomerloginComponent},
  {path:'admin',component:AdminComponent},
  {path:'customer/:id',component:CustomerComponent},
  {path:'customer-list',component:CustomerListComponent},
  {path:'create-customer',component:CreateCustomerComponent},
  {path:'details',component:DetailsComponent},
  {path:'withdraw-money',component:WithdrawMoneyComponent},
  {path:'deposit-money',component:DepositMoneyComponent},
  {path:'transfer-money',component:TransferMoneyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
