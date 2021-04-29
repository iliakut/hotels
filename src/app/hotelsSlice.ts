import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { HotelInterface } from '../lib/types/types';

export interface CounterState {
  hotels: HotelInterface[]
  currentHotel: HotelInterface | null
}

const initialState: CounterState = {
  hotels: [],
  currentHotel: null
};

export const hotelsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setHotels: (state, action: PayloadAction<HotelInterface[]>) => {
      state.hotels = action.payload;
    },
    setCurrentHotel: (state, action: PayloadAction<HotelInterface>) => {
      state.currentHotel = action.payload;
    },
  },
});

export const { setHotels, setCurrentHotel } = hotelsSlice.actions;
export const selectHotels = (state: RootState) => state.hotelsReducer.hotels;
export const selectCurrentHotel = (state: RootState) => state.hotelsReducer.currentHotel;
export default hotelsSlice.reducer;
