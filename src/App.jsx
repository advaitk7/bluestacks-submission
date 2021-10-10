import Header from './components/Header'
import Body from './components/Body';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initializeCampaignData } from './slices/campaignSlice';

function App() {
  const campaignDataLength = useSelector(state => state?.campaign?.data?.length);
  const dispatch = useDispatch();

  useEffect(() => {
    if (campaignDataLength === 0)
      dispatch(initializeCampaignData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Body />
    </>
  )
}

export default App
