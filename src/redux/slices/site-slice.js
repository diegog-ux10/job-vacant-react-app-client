import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModalVacancyFormOpen: false,
  isModalApplyFormOpen: false,
  isLoading: false,
  selectedVacancy: null,
}

export const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {
    openModalVacancyForn: (state) => {
      state.isModalVacancyFormOpen = true
    },
    closeModalVacancyForm: (state) => {
      state.isModalVacancyFormOpen = false
    },
    openModalApplyForn: (state) => {
      state.isModalApplyFormOpen = true
    },
    closeModalApplyForm: (state) => {
      state.isModalApplyFormOpen = false
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload
    },
    setSelectedVacancy: (state, { payload }) => {
      state.selectedVacancy = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  openModalVacancyForn,
  closeModalVacancyForm,
  openModalApplyForn,
  closeModalApplyForm,
  setMssgStatus,
  setLoading,
  setSelectedVacancy,
} = siteSlice.actions

export default siteSlice.reducer
