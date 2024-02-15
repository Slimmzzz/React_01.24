import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

const questionsNumSlice = createSlice({
  name: 'questionsNum',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    resetQuestionsNum: () => ({ ...initialState })
  }
})

export const questionNumReducer = questionsNumSlice.reducer

export const { increment, resetQuestionsNum } = questionsNumSlice.actions
