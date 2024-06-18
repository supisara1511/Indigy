import { AbstractControl, ValidatorFn } from "@angular/forms";

export function phoneNumberValidator(): ValidatorFn {
  const pattern: RegExp = /^0\d{9}$/;

  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = pattern.test(control.value);
    return valid ? null : { invalidPhoneNumber: true };
  };
}
