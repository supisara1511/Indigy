import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mobile",
})
export class MobileNumberFormatPipe implements PipeTransform {
  transform(value: any): any {
    return value?.trim()?.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  }
}
