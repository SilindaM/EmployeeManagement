import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id?:number;
  employee?:Employee;

  constructor(private servi:EmployeesService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.employee=new Employee();
    this.id=this.activatedRoute.snapshot.params['id'];
    
  }
 
  //return to employee list
  goToList(){
    this.router.navigate(['/employees']);
  }

}
