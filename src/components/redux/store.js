import { optionsReducer } from './optionsReducer/optionsReducer'
import { questionNumReducer } from './questionNumReducer/questionNumReducer'
import { configureStore } from '@reduxjs/toolkit'

const combinedReducers = {
  quizOptions: optionsReducer,
  questionNum: questionNumReducer
}

export const store = configureStore({
  reducer: combinedReducers
})
