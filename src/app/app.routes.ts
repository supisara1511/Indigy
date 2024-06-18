import { Routes } from "@angular/router";

export enum ROUTER_NAME {
  Pine = "pine",
  Employee = "employee",
}

export const routes: Routes = [
  {
    path: "",
    redirectTo: ROUTER_NAME.Pine,
    pathMatch: "full",
  },
  {
    path: ROUTER_NAME.Pine,
    loadChildren: () =>
      import("./presentation/pine/pine.module").then((m) => m.TestOneModule),
  },
  {
    path: ROUTER_NAME.Employee,
    loadChildren: () =>
      import("./presentation/employee/employee.module").then(
        (m) => m.EmployeeModule,
      ),
  },
];
