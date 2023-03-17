import { configureStore     } from '@reduxjs/toolkit';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createBrowserHistory } from "history";
import logger from 'redux-logger';
import welcomeReducer from './slices/welcomeSlice';
import productReducer from './slices/productSlice';
import thunk from "redux-thunk"

 const store= configureStore({
   reducer: {
      welcome: welcomeReducer,
      products:productReducer,
      routing: routerReducer
   },
   middleware: [thunk, logger],
})
// export const history = syncHistoryWithStore(createBrowserHistory(), store)
export default store; 