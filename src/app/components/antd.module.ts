import { NgModule } from "@angular/core";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzFlexModule } from "ng-zorro-antd/flex";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzPopconfirmModule } from "ng-zorro-antd/popconfirm";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzTableModule } from "ng-zorro-antd/table";
const components = [
  NzLayoutModule,
  NzTableModule,
  NzModalModule,
  NzFormModule,
  NzInputModule,
  NzButtonModule,
  NzSelectModule,
  NzGridModule,
  NzFlexModule,
  NzPopconfirmModule,
  NzInputNumberModule,
];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class AntdModule {}
