import { Routes } from '@angular/router';
import {CardPayment} from './components/card-payment/card-payment';
import {ControlPayments} from './pages/control-payments/control-payments';
import {CreatePaymentModal} from './components/create-payment-modal/create-payment-modal';

export const routes: Routes = [
  {path : 'teste', component : ControlPayments},
  {path : 'teste2', component : CreatePaymentModal},
];
