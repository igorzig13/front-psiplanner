import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicAddComponent } from './clinic-add.component';

describe('ClinicAddComponent', () => {
  let component: ClinicAddComponent;
  let fixture: ComponentFixture<ClinicAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
