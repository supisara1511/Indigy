import { EmployeePositionEnum } from "../../../enums/employee.enum";

export interface Employee {
  id: number;
  name: string;
  mobileNumber: string;
  position: EmployeePositionEnum;
}
