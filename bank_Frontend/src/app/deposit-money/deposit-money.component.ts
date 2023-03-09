import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit-money',
  templateUrl: './deposit-money.component.html',
  styleUrls: ['./deposit-money.component.css']
})
export class DepositMoneyComponent implements OnInit {

  cust:Customer=new Customer;
  id:string|null;
  customers:Customer={
    id:0,
    cUserName:'',
    cPassword:'',
    emailId:'',
    balance:0,
    contact:0,

  }
  constructor(private builder:FormBuilder,private service:CustomerService,private rputer:Router){}

  registerationForm:FormGroup;
  submitted:boolean=false;

  ngOnInit(): void {
      
  }
  onSubmit(){
    this.service.updateCustomer(this.cust,Number(this.id))
        .subscribe(x=>console.log(x));
  }

  total:any;
  depositmoney(){
    this.customers.balance=this.total+this.customers.balance;
    

  }

}
