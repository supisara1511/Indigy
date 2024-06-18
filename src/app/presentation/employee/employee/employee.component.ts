import { Component, ViewChild } from "@angular/core";
import { EmployeeService } from "../../../services/employee.service";
import { CreateEditEmployeeComponent } from "../create-edit-employee/create-edit-employee.component";
import { Employee } from "./employee.interface";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent {
  @ViewChild(CreateEditEmployeeComponent, { static: false })
  createEditEmployeeComponent?: CreateEditEmployeeComponent;

  public employees: Employee[] = [];
  public columns: { key: keyof Employee; title: string; type: string }[] = [
    { key: "id", title: "รหัสพนักงาน", type: "string" },
    { key: "name", title: "ชื่อพนักงาน", type: "string" },
    { key: "position", title: "ตำแหน่ง", type: "string" },
    { key: "mobileNumber", title: "เบอร์โทรศัพท์", type: "mobile" },
    { key: "id", title: "ตัวเลือก", type: "action" },
  ];

  constructor(private employeeService: EmployeeService) {
    this.loadEmployees();
  }

  private loadEmployees(): void {
    this.employees = this.employeeService.getEmployees();
  }

  onCreate(): void {
    this.toggleCreateEditEmployee();
  }

  onEdit(employee: Employee): void {
    this.toggleCreateEditEmployee(employee);
  }

  onDelete(employee: Employee): void {
    this.employeeService.deleteEmployee(employee.id);
    this.updateEmployees();
  }

  private updateEmployees(): void {
    this.employees = [...this.employeeService.getEmployees()];
  }

  handleSubmitForm(employee: Employee): void {
    if (employee.id) {
      this.employeeService.editEmployee(employee);
    } else {
      this.employeeService.addEmployee(employee);
    }
    this.updateEmployees();
  }

  private toggleCreateEditEmployee(employee?: Employee): void {
    if (this.createEditEmployeeComponent) {
      this.createEditEmployeeComponent.toggle(employee);
    }
  }
}
