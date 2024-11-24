import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConsultsComponent } from './client-consults.component';

describe('ClientConsultsComponent', () => {
  let component: ClientConsultsComponent;
  let fixture: ComponentFixture<ClientConsultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientConsultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientConsultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
