import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {form} from '@angular/forms/signals';

@Component({
  selector: 'app-create-payment-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-payment-modal.html',
  styleUrl: './create-payment-modal.css',
})
export class CreatePaymentModal {
  @ViewChild('dialog') dialog?: ElementRef<HTMLDialogElement>;

  open(): void {
    this.dialog?.nativeElement.showModal();
  }

  close(): void {
    this.dialog?.nativeElement.close();
  }

  conta = {
    nome: '',
    valor: null as number | null,
    vencimento: '',
    status: null as string | null,
    tipo: null as string | null,
    formaPagamento: null as string | null,
  };

  onSubmit() {
    if (!this.conta) return;
    console.log('Conta cadastrada:', this.conta);
    // aqui você chama o service / emite evento / etc
    this.close();
  }
}
