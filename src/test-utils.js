import React from 'react'
import { render } from '@testing-library/react'
// import {ThemeProvider} from 'my-ui-lib'
// import {TranslationProvider} from 'my-i18n-lib'
// import defaultStrings from 'i18n/en-x-default'
import "./utils/date";
import "./i18n";
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import campaignReducer from './slices/campaignSlice';
import activeTabReducer from './slices/tabSlice';

function customRender(
  ui,
  {
    preloadedState,
    store = configureStore({ 
      reducer: {
        campaign: campaignReducer,
        activeTab: activeTabReducer,
      }, 
      preloadedState 
    }),
    ...renderOptions
  } = {}
) {
  const AllTheProviders = ({children}) => {
    return (
      <>
        <Provider store={store}>
          {children}
        </Provider>
      </>
    )
  }

  return render(ui, { wrapper: AllTheProviders, ...renderOptions })
}
// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}
