import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalPerfilComponent } from './professional-perfil.component';

describe('ProfessionalPerfilComponent', () => {
  let component: ProfessionalPerfilComponent;
  let fixture: ComponentFixture<ProfessionalPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
