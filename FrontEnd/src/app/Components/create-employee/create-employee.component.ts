import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../Model/employee';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  //employee object
  employee:Employee=new Employee();
  submitted=false;

  constructor(private employeeService:EmployeeServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  //new employee create
  newEmployee():void{
    this.submitted=false;
    this.employee=new Employee();
  }
  //save employee
  save(){
    this.employeeService.createEmployee(this.employee)
    .subscribe(data=>{
      console.log(data);
      this.employee=new Employee();
      this.returnToList();
    },
    error=>{
      console.log(error);
    });
  }
  //return to list
  returnToList(){
    this.router.navigate(['/employees']);
  }
  onSubmit(){
    this.submitted=true;
    this.save();
  }

}
