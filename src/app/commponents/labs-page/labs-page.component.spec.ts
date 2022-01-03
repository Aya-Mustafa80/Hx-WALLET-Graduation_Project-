import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsPageComponent } from './labs-page.component';

describe('LabsPageComponent', () => {
  let component: LabsPageComponent;
  let fixture: ComponentFixture<LabsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
