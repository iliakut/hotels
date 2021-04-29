import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import hotelsReducer from './hotelsSlice';
import roomsReducer from './roomsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    hotelsReducer,
    roomsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
