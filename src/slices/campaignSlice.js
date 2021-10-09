import { createSlice } from '@reduxjs/toolkit'
// import { getItem, KEY } from '../utils/localStorage';
const getInitialData = () => import("../data.json");

const initialState = {
  data: [],
  activeTabIndex: 1,
}

export const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  reducers: {
    setCampaignData: (state, action) => {
      state.data = action.payload;
    },
    updateDateInCampaign: (state, { payload: { index, date } = {} }) => {
      state.data[index].createdOn = date;
    },
    changeActiveTab: (state, { index }) => {
      state.activeTabIndex = index;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCampaignData, updateDateInCampaign, changeActiveTab } = campaignSlice.actions;

export const initializeCampaignData = () => dispatch => {
  getInitialData().then(({ data }) => {
    dispatch(setCampaignData(data))
  });
};

export default campaignSlice.reducer;
