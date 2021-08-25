import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/Model/employee';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees?:Observable<Employee[]>;
  
  constructor(private serv:EmployeesService,private router:Router) { }

  ngOnInit(): void {
    this.LoadData();
  }
  //load Data to the component
  LoadData(){
    this.employees=this.serv.getAllEmployees();
  }
  //delete select employee
  DeleteEmployeeById(id:number){
    this.serv.deleteEmployee(id).subscribe(
      data=>{
        console.log(data);
        //reload the data after deleting an employee
        this.LoadData();
      },
      error=>{
        console.log(error);
      });
  }
  //get Employee Details
  EmployeeDetails(id:number){
    this.router.navigate(['details',id]);
  }
}
