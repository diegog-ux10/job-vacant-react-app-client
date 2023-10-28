import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mssg: null,
  mssgStatus: 'normal',
  isModalOpen: false,
  isLoading: false,
}

export const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {
    setMssg: (state, action) => {
      state.mssg = action.payload.mssg
      state.mssgStatus = action.payload.status
    },
    removeMssg: (state) => {
      state.mssg = null
    },
    openModal: (state) => {
      state.isModalOpen = true
    },
    closeModal: (state) => {
      state.isModalOpen = false
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setMssg,
  removeMssg,
  openModal,
  closeModal,
  setMssgStatus,
  setLoading,
} = siteSlice.actions

export default siteSlice.reducer
