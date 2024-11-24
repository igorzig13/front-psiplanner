import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCalendarioConsultaRealizadaComponent } from './client-calendario-consulta-realizada.component';

describe('ClientCalendarioConsultaRealizadaComponent', () => {
  let component: ClientCalendarioConsultaRealizadaComponent;
  let fixture: ComponentFixture<ClientCalendarioConsultaRealizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCalendarioConsultaRealizadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCalendarioConsultaRealizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
