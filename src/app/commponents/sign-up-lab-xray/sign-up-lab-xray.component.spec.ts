import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpLabXRayComponent } from './sign-up-lab-xray.component';

describe('SignUpLabXRayComponent', () => {
  let component: SignUpLabXRayComponent;
  let fixture: ComponentFixture<SignUpLabXRayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpLabXRayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpLabXRayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
