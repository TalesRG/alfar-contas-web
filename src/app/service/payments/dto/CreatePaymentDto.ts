export interface CreatePaymentDto {
  name: string
  totalValue: number,
  status: string,
  category: string,
  paymentMethod: string
}
