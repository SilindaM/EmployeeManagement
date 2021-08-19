import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './Model/Components/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './Model/Components/employee-details/employee-details.component';
import { EmployeeListComponent } from './Model/Components/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './Model/Components/update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
