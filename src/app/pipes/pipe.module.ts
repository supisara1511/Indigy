import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MobileNumberFormatPipe } from "./mobile-number/mobile-number-format.pipe";

@NgModule({
  declarations: [MobileNumberFormatPipe],
  imports: [CommonModule],
  exports: [MobileNumberFormatPipe],
})
export class PipeModule {}
