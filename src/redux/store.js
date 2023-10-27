import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user-slice'
import siteReducer from './slices/site-slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    site: siteReducer
  },
})