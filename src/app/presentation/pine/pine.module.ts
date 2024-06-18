import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AntdModule } from "../../components/antd.module";
import { PipeModule } from "../../pipes/pipe.module";
import { PineComponent } from "./pine.component";

const routes: Routes = [{ path: "", component: PineComponent }];

@NgModule({
  declarations: [PineComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AntdModule,
    PipeModule,
  ],
})
export class TestOneModule {}
