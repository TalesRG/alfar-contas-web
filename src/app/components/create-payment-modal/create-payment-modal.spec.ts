import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaymentModal } from './create-payment-modal';

describe('CreatePaymentModal', () => {
  let component: CreatePaymentModal;
  let fixture: ComponentFixture<CreatePaymentModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePaymentModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePaymentModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
