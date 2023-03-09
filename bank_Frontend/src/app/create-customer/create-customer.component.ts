import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {
  
  cust:Customer=new Customer()
  constructor(private service:CustomerService,private router:Router){}

 
  onSubmit(){
    this.service.saveCustomer(this.cust).subscribe(x=>console.log(x));
    alert("customer added successfully")
    this.router.navigate(['customerlogin']);
  }

  




}
