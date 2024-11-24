import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalConsultsComponent } from './professional-consults.component';

describe('ProfessionalConsultsComponent', () => {
  let component: ProfessionalConsultsComponent;
  let fixture: ComponentFixture<ProfessionalConsultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalConsultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalConsultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
