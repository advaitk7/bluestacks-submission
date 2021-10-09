import { createSlice } from '@reduxjs/toolkit'

const getInitialData = () => import("../data.json");

const initialState = {
  data: [],
  // activeTab: 1,
}

export const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  reducers: {
    setCampaignData: (state, action) => {
      state.data = action.payload;
    },
    updateDateInCampaign: (state, { payload: { id, date } = {} }) => {
      state.data.filter((campaign) => campaign.id === id)[0].createdOn = date;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCampaignData, updateDateInCampaign } = campaignSlice.actions;

export const initializeCampaignData = () => dispatch => {
  getInitialData().then(({ data }) => {
    dispatch(setCampaignData(data))
  });
};

export default campaignSlice.reducer;
