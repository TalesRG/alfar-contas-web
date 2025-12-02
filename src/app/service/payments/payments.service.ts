import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import {CreatePaymentDto} from './dto/CreatePaymentDto';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  private apiUrl = `${environment.apiUrl}/payments`;
  constructor(private http: HttpClient) { }

  cadastrarPagamento(payment: CreatePaymentDto) {
    return this.http.post(`${this.apiUrl}/create`, payment);
  }

}
