import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id: number=0;
  employee?:Employee;

  constructor(private employeeService:EmployeeServiceService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //when the application loads, load the selected id of the employee
    this.employee=new Employee();
    this.id=this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployee(this.id)
    .subscribe(
      data=>{
        console.log(data);
        this.employee=data;
      },
      error=>{
        console.log(error);
      });
  }
  //update the employee
  updateEmployee(){
    this.employeeService.updateEmployee(this.id,this.employee)
    .subscribe(
      data=>{
        console.log(data);
        this.employee=new Employee();
        this.loadEmployees();
      },
      error=>{
        console.log(error)
      }
    )
  }
  //load employees
  loadEmployees(){
    this.router.navigate(['/employees']);
  }
  //submit button
  onSubmitButton(){
    this.updateEmployee();
  }
}
