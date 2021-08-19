import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../Model/employee';
import { Observable } from 'rxjs';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees?:Observable<Employee[]>;
  constructor(private employeeService:EmployeeServiceService,private router:Router) { }

  ngOnInit(): void {
    //when the load call this method
    this.loadEmployees();
  }
  //load employees
  loadEmployees(){
    this.employees=this.employeeService.getAllEmployees();
  }
  //delete employee by id
  deleteEmployeeById(id:number){
    this.employeeService.deleteEmployeeById(id)
    .subscribe(
      data=>{
        console.log(data);
        //load the employees not deleted after deleting
        this.loadEmployees();
      },
      error=>{
        console.log(error);
      });
  }
  //show employee details
  showEmployeeDetails(id:number){
    this.router.navigate(['details',id]);
  }
  //update Employees Details
  updateEmployeeDetails(id:number){
    this.router.navigate(['update',id]);
  }

}
