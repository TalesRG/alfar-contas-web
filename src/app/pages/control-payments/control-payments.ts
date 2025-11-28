import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Scorer} from '../../components/scorer/scorer';
import {CardPayment} from '../../components/card-payment/card-payment';

@Component({
  selector: 'app-control-payments',
  imports: [
    NgOptimizedImage,
    Scorer,
    CardPayment
  ],
  templateUrl: './control-payments.html',
  styleUrl: './control-payments.css',
})
export class ControlPayments {
  scorers = [{name : "Total a pagar", score: 1200}, {name : "Total pago", score: 800}, {name : "Total pendente", score: 400}];
  payments: any;

}
