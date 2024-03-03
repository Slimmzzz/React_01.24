import { createSlice } from '@reduxjs/toolkit'
import { OptionsDataWithNumberPayload, OptionsDataWithStringPayload } from '../../../Types/Types'

const initialState = {
  questions_quantity: 5,
  questions_category: '',
  questions_difficulty: '',
  questions_type: '',
  quiz_time: '1'
}

const optionSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setQuestionsQuantity(state, action: OptionsDataWithNumberPayload): void {
      state['questions_quantity'] = action.payload
    },
    setQuestionsCategory(state, action: OptionsDataWithStringPayload): void {
      state['questions_category'] = action.payload
    },
    setQuestionsDifficulty(state, action: OptionsDataWithStringPayload): void {
      state['questions_difficulty'] = action.payload
    },
    setQuestionsType(state, action: OptionsDataWithStringPayload): void {
      state['questions_type'] = action.payload
    },
    setQuizTime(state, action: OptionsDataWithStringPayload): void {
      state['quiz_time'] = action.payload
    },
    resetOptions: () => ({ ...initialState })
  }
})

export const optionsReducer = optionSlice.reducer

export const {
  setQuestionsQuantity,
  setQuestionsCategory,
  setQuestionsDifficulty,
  setQuestionsType,
  setQuizTime,
  resetOptions
} = optionSlice.actions
