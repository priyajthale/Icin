import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  

  constructor(private route:Router, private activateroute:ActivatedRoute){}
  ngOnInit(): void {
      
  }

  logout(){
    alert("logout successfully");
    return this.route.navigate(["/customerlogin"], {relativeTo:this.activateroute});
  }

}
