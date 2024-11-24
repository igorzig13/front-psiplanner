import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCalendarioConsultaAgendadaComponent } from './client-calendario-consulta-agendada.component';

describe('ClientCalendarioConsultaAgendadaComponent', () => {
  let component: ClientCalendarioConsultaAgendadaComponent;
  let fixture: ComponentFixture<ClientCalendarioConsultaAgendadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCalendarioConsultaAgendadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCalendarioConsultaAgendadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
