import { configureStore } from '@reduxjs/toolkit';
import scheduleReducer from './reducers/scheduleReducers';

export const store = configureStore({
  reducer: {
    student: scheduleReducer,
  },
});
