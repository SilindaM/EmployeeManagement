import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee:Employee=new Employee();
  submitted=false;

  constructor(private servi:EmployeesService,private router:Router) { }

  ngOnInit(): void {
  }
  //create new employee
  newEmployee():void{
    this.submitted=false;
    this.employee=new Employee();
  }
  save(){
      this.servi.createEmployee(this.employee).subscribe(
        data=>{
          console.log(data);
        },error=>{
          console.log(error);
        });
        //create the employee
        this.employee=new Employee();
        //go back to the list
        this.BackToList();
  }
  //go back to the list
  BackToList(){
    this.router.navigate(['/employees']);
  }
  //when clicking the submit button
  onSubmit(){
    this.submitted=true;
    this.save();
  }

}
