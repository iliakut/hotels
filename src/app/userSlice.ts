import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';


const initialState = {
  user: {
    firstName: 'Jane',
    lastName: 'Doe'
  },
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  },
});

export const selectUser = (state: RootState) => state.userReducer.user;
export default userSlice.reducer;
