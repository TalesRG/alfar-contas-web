import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {form} from '@angular/forms/signals';
import {CreatePaymentDto} from '../../service/payments/dto/CreatePaymentDto';
import {PaymentsService} from '../../service/payments/payments.service';

@Component({
  selector: 'app-create-payment-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-payment-modal.html',
  styleUrl: './create-payment-modal.css',
})
export class CreatePaymentModal implements OnInit {
  @ViewChild('dialog') dialog?: ElementRef<HTMLDialogElement>;
  formPayment!: FormGroup;
  constructor(private formBuilder: FormBuilder, private paymentsService: PaymentsService) { }
  ngOnInit(): void {
   this.formPayment = this.iniciarFormulario();
  }


  iniciarFormulario(){
    return this.formBuilder.group({
      nomeConta: ['', Validators.required],
      valor: ['', Validators.required],
      vencimento: ['', Validators.required],
      status: ['', Validators.required],
      tipo: ['', Validators.required],
      formaPagamento: ['', Validators.required],
    })
  }

  open(): void {
    this.dialog?.nativeElement.showModal();
  }

  close(): void {
    this.dialog?.nativeElement.close();
  }

  onSubmit() {
    if (!this.formPayment) return;
    this.formPayment.markAllAsTouched();
    if (this.formPayment.invalid) return;
    const dataForm = this.formPayment.value;

    const paymentDto : CreatePaymentDto = {
      name : dataForm.nomeConta,
      totalValue : dataForm.valor,
      status : dataForm.status,
      category : dataForm.tipo,
      paymentMethod : dataForm.formaPagamento
    }
    this.paymentsService.cadastrarPagamento(paymentDto).subscribe({
      next: () => {
        alert("Pagamento cadastrado com sucesso!");
      },
      error: () => alert("Erro ao cadastrar pagamento!")
    });
    this.close();
  }

}
