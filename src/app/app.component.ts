import { Component } from "@angular/core";
import { ROUTER_NAME } from "./app.routes";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  public menus = [
    {
      key: ROUTER_NAME.Pine,
      label: "ข้อสอบข้อที่ 1",
      icon: "apartment",
    },
    {
      key: ROUTER_NAME.Employee,
      label: "ข้อสอบข้อที่ 2",
      icon: "usergroup-add",
    },
  ];
}
