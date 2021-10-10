import Header from './components/Header'
import Body from './components/Body';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initializeCampaignData } from './slices/campaignSlice';
import React from 'react';

function App() {
  const campaignDataLength = useSelector(state => state?.campaign?.data?.length);
  const dispatch = useDispatch();

  useEffect(() => {
    if (campaignDataLength === 0)
      dispatch(initializeCampaignData());
  }, []);

  return (
    <>
      <Header />
      <Body />
    </>
  )
}

export default App
