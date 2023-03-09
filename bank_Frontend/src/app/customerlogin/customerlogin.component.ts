import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {
  
  constructor(private customerserive : CustomerService, private route:Router, private activaterout:ActivatedRoute){}

  uname : String='';
  pwd : string='';

  ngOnInit(): void { }

  customerLogin(){
    this.customerserive.getAllCustomers().subscribe(userdata=>{
      console.log(userdata);
      userdata.forEach(data=>{
        console.log(data);
        if(data.cUserName==this.uname && data.cPassword==this.pwd)
        {alert("login successfull");}
        this.route.navigate(["customer",data.id]);
      })
    })
  }

}
