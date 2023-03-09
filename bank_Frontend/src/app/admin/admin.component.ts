import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private route : Router, private activatedRoute : ActivatedRoute){}

  ngOnInit(): void { }

  
  logout(){
    alert("logout successfully");
    return this.route.navigate(["/adminlogin"], {relativeTo:this.activatedRoute});
  }

}
