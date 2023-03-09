import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  baseUrl:string="http://localhost:8080/admin"
  constructor(private http:HttpClient) { }

  getallAdmins():Observable<Admin[]>{
    return this.http.get<Admin[]>(this.baseUrl + "/list");
}
}
