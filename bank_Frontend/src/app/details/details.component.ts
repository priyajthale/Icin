import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  customer: Customer;

  
  constructor(private service :CustomerService,private activatedroute:ActivatedRoute){}
  
  ngOnInit(): void {
    const id=this.activatedroute.snapshot.paramMap.get('id');
    this.service.getCustomerByID(Number(id)).subscribe(x=>this.customer=x);
  }

}
