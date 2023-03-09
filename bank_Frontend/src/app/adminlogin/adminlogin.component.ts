import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private adminservice :AdminService,
    private route : Router,
    private activatedRoute : ActivatedRoute){}

    aname : string ='';
    pwd : string='';

  ngOnInit(): void { }

  adminLogin(){
    this.adminservice.getallAdmins().subscribe(admindata=>{
      admindata.forEach(data=>{
        if(data.userName==this.aname && data.password==this.pwd){
          alert("admin login successfull")
          this.route.navigate(["/admin"],{relativeTo:this.activatedRoute});
        }
      })
    })
  }

}
