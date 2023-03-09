import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  baseUrl:string="http://localhost:8080/customer"
  constructor(private http:HttpClient) { }

  getAllCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseUrl+"/all-list")

  }

  getCustomerByID(id:number):Observable<Customer>{
    return this.http.get<Customer>(this.baseUrl+"/by-id" +id);
  }

  deleteCustomerById(id:number){
    return this.http.delete(this.baseUrl+"/delete" +id)
  }

  saveCustomer(cust:Customer){
    return this.http.post(this.baseUrl+"/save",cust);
  }

  updateCustomer(cust:Customer,id:number){
    return this.http.put(this.baseUrl+"/update" +id,cust);
  }
  
}
