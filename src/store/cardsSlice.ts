import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Card, CardsState } from '../components/types';
import { fetchCards } from '../api/cardsApi';

export const fetchCardsAsync = createAsyncThunk(
  'cards/fetchCards',
  async () => {
    const response = await fetchCards();
    return response;
  }
);

const initialState: CardsState = {
  cards: [],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
    freezeCard: (state, action: PayloadAction<string>) => {
      const card = state.cards.find((card) => card.id === action.payload);
      if (card) {
        card.isFrozen = !card.isFrozen;
      }
    },
    setSpendLimit: (state, action: PayloadAction<{ id: string; limit: number }>) => {
      const card = state.cards.find((card) => card.id === action.payload.id);
      if (card) {
        card.spendLimit = action.payload.limit;
      }
    },
    // Add more reducers as needed
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCardsAsync.fulfilled, (state, action) => {
      state.cards = action.payload;
    });
  },
});

export const { addCard, freezeCard, setSpendLimit } = cardsSlice.actions;

export default cardsSlice.reducer;
