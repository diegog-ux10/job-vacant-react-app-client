import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'non-authenticated',
  user: null,
  errorMssg: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    checking: (state) => {
      state.status = 'checking'
      state.user = {}
      state.errorMssg = undefined
    },
    login: (state, { payload }) => {
      state.status = 'authenticated'
      const { id, name, email } = payload

      state.user = {
        id,
        name,
        email,
      }

      state.errorMssg = undefined
      // localStorage.setItem('user', JSON.stringify(payload));
      localStorage.setItem('auth', JSON.stringify(state))
    },
    badAuthenticate: (state, { payload }) => {
      state.status = 'non-authenticated'
      state.user = null
      state.errorMssg = payload
    },
    logout: (state) => {
      state.status = 'non-authenticated'
      state.user = null
      state.errorMssg = undefined
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, authenticate, logout, checking, badAuthenticate } =
  userSlice.actions

export default userSlice.reducer
