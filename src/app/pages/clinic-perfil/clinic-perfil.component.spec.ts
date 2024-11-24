import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicPerfilComponent } from './clinic-perfil.component';

describe('ClinicPerfilComponent', () => {
  let component: ClinicPerfilComponent;
  let fixture: ComponentFixture<ClinicPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
