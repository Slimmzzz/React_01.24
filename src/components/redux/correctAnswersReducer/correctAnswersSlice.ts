import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  correctAnswersAmount: 0
}

export const correctAnswersSlice = createSlice({
  name: 'correctAnswersSlice',
  initialState,
  reducers: {
    correctAnswersIncrement(state) {
      state.correctAnswersAmount++
    },
    resetCorrectSlice: () => ({ ...initialState })
  }
})

export const correctAnswersReducer = correctAnswersSlice.reducer

export const { correctAnswersIncrement, resetCorrectSlice } = correctAnswersSlice.actions
