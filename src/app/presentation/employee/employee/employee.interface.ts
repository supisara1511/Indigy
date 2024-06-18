import { EmployeePositionEnum } from "../../../enums/employee.enum";

export interface Employee {
  id: string;
  name: string;
  mobileNumber: string;
  position: EmployeePositionEnum;
}
