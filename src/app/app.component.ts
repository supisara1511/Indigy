import { Component } from '@angular/core';
import { ROUTER_NAME } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Indigy';
  public menus = [
    {
      key: ROUTER_NAME.Pine,
      label: 'ข้อสอบข้อที่ 1',
      icon: 'apartment',
    },
    {
      key: ROUTER_NAME.Employee,
      label: 'ข้อสอบข้อที่ 2',
      icon: 'usergroup-add',
    },
  ];
}
