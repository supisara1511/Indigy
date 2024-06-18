import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PineComponent } from "./pine.component";

describe("TestOneComponent", () => {
  let component: PineComponent;
  let fixture: ComponentFixture<PineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
