import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { HotelInterface } from '../lib/types/types';

export interface CounterState {
  hotels: HotelInterface[]
}

const initialState: CounterState = {
  hotels: []
};

export const hotelSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setHotels: (state, action: PayloadAction<HotelInterface[]>) => {
      state.hotels = action.payload;
    },
  },
});

export const { setHotels } = hotelSlice.actions;
export const selectHotels = (state: RootState) => state.hotelReducer.hotels;
export default hotelSlice.reducer;
