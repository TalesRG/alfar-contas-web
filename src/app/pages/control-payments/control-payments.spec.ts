import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPayments } from './control-payments';

describe('ControlPayments', () => {
  let component: ControlPayments;
  let fixture: ComponentFixture<ControlPayments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlPayments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlPayments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
