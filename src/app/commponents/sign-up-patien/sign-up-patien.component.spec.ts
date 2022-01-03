import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPatienComponent } from './sign-up-patien.component';

describe('SignUpPatienComponent', () => {
  let component: SignUpPatienComponent;
  let fixture: ComponentFixture<SignUpPatienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpPatienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPatienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
