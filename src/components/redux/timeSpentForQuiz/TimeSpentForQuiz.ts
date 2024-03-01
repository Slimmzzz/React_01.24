import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  minutes: 0,
  seconds: 0
}

export const TimeSpentForQuizSlice = createSlice({
  name: 'timeSpentForQuiz',
  initialState,
  reducers: {
    addTimeSpentForQuiz(state, action) {
      state.minutes += action.payload[0]
      state.seconds += action.payload[1]
    },
    resetTimeSpent: () => ({ ...initialState })
  }
})

export const timeSpentForQuizReducer = TimeSpentForQuizSlice.reducer

export const { addTimeSpentForQuiz, resetTimeSpent } = TimeSpentForQuizSlice.actions
