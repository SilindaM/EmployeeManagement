import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private baseUrl="http://localhost:8082/api/employees/";
  constructor(private http:HttpClient) { }
  //get employee by Id
  getEmployee(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/{$id}`);
  }
  //get all employees
  getAllEmployees():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  //update employee 
  updateEmployee(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }
  //deleteEmployee
  deleteEmployeeById(id:number):Observable<any>{
    return  this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }
  //create employee
  createEmployee(employee:any):Observable<any>{
    return this.http.post(`${this.baseUrl}`,employee);
  }
}
