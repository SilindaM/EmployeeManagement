import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id:number=0;
  employee?:Employee;

  constructor(private servi:EmployeesService,private router:Router,private activate:ActivatedRoute) { }

  ngOnInit(): void {
    this.employee=new Employee();
    this.id=this.activate.snapshot.params['id'];
    this.servi.getEmployeeById(this.id)
    .subscribe(data=>{
      console.log(data);
      this.employee=data;
    },
    error=>{
      console.log(error);
    });
  }
  //return to list
  EmployeeList(){
    this.router.navigate(['employees']);
  }

}
