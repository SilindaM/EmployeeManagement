import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private baseUrl="http://localhost:8081/api/employees";
  constructor(private http:HttpClient) { }


  //get Employee by id
  getEmployeeById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  //get All employees
  getAllEmployees():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  //create new Employee
  createEmployee(employee:object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,employee);
  }
  //update an employee
  updateEmployee(id:number,employee:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,employee);
  }
  //delete employee
  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }
}
