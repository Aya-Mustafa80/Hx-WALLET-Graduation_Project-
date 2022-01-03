import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPharmacyComponent } from './sign-up-pharmacy.component';

describe('SignUpPharmacyComponent', () => {
  let component: SignUpPharmacyComponent;
  let fixture: ComponentFixture<SignUpPharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpPharmacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
