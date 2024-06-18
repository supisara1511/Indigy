import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from "uuid";
import { Employee } from "../core/domain/employee.model";
import { EmployeePositionEnum } from "../enums/employee.enum";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  public employees: Employee[] = [
    {
      id: uuidv4(),
      name: "สมชาย ใจดี",
      position: EmployeePositionEnum.Programmer,
      mobileNumber: "0923333333",
    },
  ];

  constructor() {}
  public getEmployees(): Employee[] {
    return this.employees;
  }

  public addEmployee(employee: Employee): void {
    employee.id = uuidv4();
    this.employees.push(employee);
  }

  public editEmployee(updatedEmployee: Employee): void {
    const index = this.employees.findIndex(
      (emp) => emp.id === updatedEmployee.id,
    );
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    } else {
      console.error(`Employee with ID ${updatedEmployee.id} not found.`);
    }
  }

  public deleteEmployee(employeeId: string): void {
    this.employees = this.employees.filter((emp) => emp.id !== employeeId);
  }
}
