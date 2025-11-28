import {Component, ViewChild} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Scorer} from '../../components/scorer/scorer';
import {CardPayment} from '../../components/card-payment/card-payment';
import {CreatePaymentModal} from '../../components/create-payment-modal/create-payment-modal';

@Component({
  selector: 'app-control-payments',
  imports: [
    Scorer,
    CardPayment,
    CreatePaymentModal
  ],
  templateUrl: './control-payments.html',
  styleUrl: './control-payments.css',
})
export class ControlPayments {
  scorers = [{name : "Total a pagar", score: 1200}, {name : "Total pago", score: 800}, {name : "Total pendente", score: 400}];
  @ViewChild(CreatePaymentModal) colorModal!: CreatePaymentModal;
  openModal() {
    this.colorModal.open();
  }

}
