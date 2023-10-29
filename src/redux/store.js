import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user-slice'
import siteReducer from './slices/site-slice'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('auth')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const store = configureStore({
  reducer: {
    user: userReducer,
    site: siteReducer,
  },
  preloadedState: loadState(),
})

store.subscribe(() => {
  localStorage.setItem('auth', JSON.stringify(store.getState()))
})
