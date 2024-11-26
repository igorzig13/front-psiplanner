import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySchedulerComponent } from './daily-scheduler.component';

describe('DailySchedulerComponent', () => {
  let component: DailySchedulerComponent;
  let fixture: ComponentFixture<DailySchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailySchedulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailySchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
