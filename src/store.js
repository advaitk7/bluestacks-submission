import { configureStore } from '@reduxjs/toolkit'
import campaignReducer from './slices/campaignSlice';
import activeTabReducer from './slices/tabSlice';
import { getItem, KEY, setItem } from './utils/localStorage';

const preloadedState = getItem(KEY) 
                       ? JSON.parse(getItem(KEY))
                       : {}

export const store = configureStore({
  reducer: {
    campaign: campaignReducer,
    activeTab: activeTabReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  setItem(KEY, JSON.stringify(store.getState()));
});