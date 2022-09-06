import { configureStore } from '@reduxjs/toolkit';
import homepageReducer from './reducers/homepage.js';

export const store = configureStore({
  reducer: {
    homepage: homepageReducer,
  },
});