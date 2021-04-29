import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { HotelInterface, RoomInterface } from '../lib/types/types';

export interface CounterState {
  rooms: RoomInterface[]
}

const initialState: CounterState = {
  rooms: [],
};

export const roomsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setRooms: (state, action: PayloadAction<RoomInterface[]>) => {
      state.rooms = action.payload;
    }
  },
});

export const { setRooms } = roomsSlice.actions;
export const selectRooms = (state: RootState) => state.roomsReducer.rooms;
export default roomsSlice.reducer;
