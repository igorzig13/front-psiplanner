import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicProfessionalsComponent } from './clinic-professionals.component';

describe('ClinicProfessionalsComponent', () => {
  let component: ClinicProfessionalsComponent;
  let fixture: ComponentFixture<ClinicProfessionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicProfessionalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicProfessionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
