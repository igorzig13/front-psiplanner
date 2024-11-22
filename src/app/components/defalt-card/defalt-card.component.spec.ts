import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaltCardComponent } from './defalt-card.component';

describe('DefaltCardComponent', () => {
  let component: DefaltCardComponent;
  let fixture: ComponentFixture<DefaltCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaltCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaltCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
