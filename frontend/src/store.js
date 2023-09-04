import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'
import {apiSlice} from './slices/apiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;