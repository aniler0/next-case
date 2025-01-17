export interface PaymentRequestModel {
  packageIds: [string];
  cardHolderName: string;
  cardNumber: string;
  expireDate: string;
  totalAmount: number;
  cvv: string;
  currency: string;
}
