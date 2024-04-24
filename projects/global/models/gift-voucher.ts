export interface GiftVoucher {
  _id: string;
  recipient_name: string;
  recipient_email: string;
  sender_name: string;
  sender_email: string;
  message: string;
  amount: number;
  balance: number;
  expiry: Date;
  send_date: Date;
  sent: boolean;
}
