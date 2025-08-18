export interface Transaction {
    id: number;
    merchant: string;
    date: string;
    amount: number;
    type: 'refund' | 'charge';
    icon: string; 
  }

export interface Card {
  id: string;
  name: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  isFrozen: boolean;
  spendLimit: number | null;
  transactions: any[]; 
}

export interface CardsState {
  cards: Card[];
}
  