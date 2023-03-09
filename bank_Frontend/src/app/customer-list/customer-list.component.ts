import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit{

  customers:Customer[]
  constructor(private service:CustomerService){}
  ngOnInit(): void {
      this.service.getAllCustomers().subscribe(x=>this.customers=x)
  }

  delete(id:number){
    this.customers=this.customers.filter(c=>c.id!==id)
    this.service.deleteCustomerById(id).subscribe(data=>console.log(data))
  }

}
