import { configureStore } from '@reduxjs/toolkit'
import campaignReducer from './slices/campaignSlice';
import { getItem, KEY, setItem } from './utils/localStorage';

const preloadedState = getItem(KEY) 
                       ? JSON.parse(getItem(KEY))
                       : {}

export const store = configureStore({
  reducer: {
    campaign: campaignReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  setItem(KEY, JSON.stringify(store.getState()));
});