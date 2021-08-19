import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './Components/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './Components/update-employee/update-employee.component';

const routes: Routes = [
  {path:'',redirectTo:"employee",pathMatch:"full"},
  {path:"employees",component:EmployeeListComponent},
  {path:"add",component:CreateEmployeeComponent},
  {path:"update/:id",component:UpdateEmployeeComponent},
  {path:"details/:id",component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
