import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EmployeePositionEnum } from "../../../enums/employee.enum";
import { phoneNumberValidator } from "../../../utils/validators.util";

@Component({
  selector: "app-create-edit-employee",
  templateUrl: "./create-edit-employee.component.html",
  styleUrls: ["./create-edit-employee.component.css"],
})
export class CreateEditEmployeeComponent {
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();
  title: string = "Create Employee";
  isVisible = false;
  form: FormGroup;
  data: any;

  public labels = {
    name: {
      label: "ชื่อ-นามสกุล",
      name: "name",
      errors: {
        require: "กรุณากรอก ชื่อ-นามสกุล",
      },
    },
    position: {
      label: "ตำแหน่ง",
      name: "position",
      errors: {
        require: "กรุณากรอก ตำแหน่ง",
      },
      options: Object.values(EmployeePositionEnum).map((value) => ({
        value: value,
      })),
    },
    mobileNumber: {
      label: "เบอร์โทร",
      name: "mobileNumber",
      errors: {
        require: "กรุณากรอก เบอร์โทร",
      },
    },
  };

  constructor() {
    this.form = this.initializeForm();
  }

  private initializeForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, Validators.required),
      position: new FormControl(null, Validators.required),
      mobileNumber: new FormControl(null, [
        Validators.required,
        phoneNumberValidator(),
      ]),
    });
  }
  toggle(model?: any) {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.initializeFormData(model);
    }
  }

  initializeFormData(model?: any): void {
    this.data = { ...model };
    if (model?.id) {
      this.title = "แก้ไขข้อมูลพนักงาน";
      this.form.patchValue({
        name: model.name,
        position: model.position,
        mobileNumber: model.mobileNumber,
      });
    } else {
      this.title = "สร้างพนักงาน";
      this.form.reset();
    }
  }

  submitForm(): void {
    if (this.form.valid) {
      const model = { ...this.form.value, id: this.data.id };
      this.formSubmit.emit(model);
      this.isVisible = false;
    } else {
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.form.reset();
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
