import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id:number=0;
  employee?:Employee;
  constructor(
    private employeeService:EmployeeServiceService,
    private router:Router,
    private activateRoute:ActivatedRoute ) { }

  ngOnInit():void {
    this.employee=new Employee();
    this.id=this.activateRoute.snapshot.params['id'];
    this.employeeService.getEmployee(this.id)
    .subscribe(data=>{
      console.log(data);
      this.employee=data;
    },
    error=>{
      console.log(error);
    });
  }
  //bring details
  List(){
    this.router.navigate(['employees'])
  }
}
