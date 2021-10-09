import { createSlice } from '@reduxjs/toolkit'

export const TABS = {
  upcoming: "upcoming",
  live: "live",
  past: "past",
};

const initialState = {
  key: TABS.live,
};

export const campaignSlice = createSlice({
  name: 'activeTab',
  initialState,
  reducers: {
    changeActiveTab: (state, action) => {
      state.key = TABS[action.payload];
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeActiveTab } = campaignSlice.actions;

export default campaignSlice.reducer;
