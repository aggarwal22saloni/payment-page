import { Card } from '../components/types';

export const fetchCards = (): Promise<Card[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const dummyCards: Card[] = [
        {
          id: '1',
          name: 'Mark Henry',
          cardNumber: '2345 6754 2312 2020',
          expiry: '12/20',
          cvv: '***',
          isFrozen: false,
          spendLimit: null,
          transactions: [],
        },
        {
          id: '2',
          name: 'John Doe',
          cardNumber: '1234 5678 9012 1234',
          expiry: '10/22',
          cvv: '***',
          isFrozen: false,
          spendLimit: null,
          transactions: [],
        },
        {
          id: '3',
          name: 'Jane Smith',
          cardNumber: '1254 3421 3456 5678',
          expiry: '05/23',
          cvv: '***',
          isFrozen: false,
          spendLimit: null,
          transactions: [],
        },
        {
          id: '4',
          name: 'Peter Jones',
          cardNumber: '2345 7654 8902 9012',
          expiry: '08/21',
          cvv: '***',
          isFrozen: false,
          spendLimit: null,
          transactions: [],
        },
      ];
      resolve(dummyCards);
    }, 100);
  });
};
