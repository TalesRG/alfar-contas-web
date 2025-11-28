import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-card-payment',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './card-payment.html',
  styleUrl: './card-payment.css',
})
export class CardPayment {
  @Input() payment!: any;

}
