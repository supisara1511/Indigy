import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AntdModule } from "../../components/antd.module";
import { PipeModule } from "../../pipes/pipe.module";
import { CreateEditEmployeeComponent } from "./create-edit-employee/create-edit-employee.component";
import { EmployeeComponent } from "./employee/employee.component";
const routes: Routes = [{ path: "", component: EmployeeComponent }];

@NgModule({
  declarations: [EmployeeComponent, CreateEditEmployeeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AntdModule,
    PipeModule,
  ],
  providers: [],
})
export class EmployeeModule {}
