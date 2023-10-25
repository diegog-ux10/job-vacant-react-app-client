import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    authenticate: (state) => {
      state.isAuthenticated = true
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, authenticate } = userSlice.actions

export default userSlice.reducer