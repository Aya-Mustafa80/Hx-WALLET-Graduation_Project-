import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpLabTestComponent } from './sign-up-lab-test.component';

describe('SignUpLabTestComponent', () => {
  let component: SignUpLabTestComponent;
  let fixture: ComponentFixture<SignUpLabTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpLabTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpLabTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
