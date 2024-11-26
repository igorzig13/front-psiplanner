import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalScheduleComponent } from './professional-schedule.component';

describe('ProfessionalScheduleComponent', () => {
  let component: ProfessionalScheduleComponent;
  let fixture: ComponentFixture<ProfessionalScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
