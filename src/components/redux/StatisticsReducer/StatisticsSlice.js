import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions: {
    allQuestions: 0,
    allCorrectAnswers: 0
  },
  categories: {
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0,
    22: 0,
    23: 0,
    24: 0,
    25: 0,
    26: 0,
    27: 0,
    28: 0,
    29: 0,
    30: 0,
    31: 0,
    32: 0
  },
  difficulty: {
    Easy: 0,
    Medium: 0,
    Hard: 0
  },
  type: {
    boolean: 0,
    multiple: 0
  }
}

export const StatisticsSlice = createSlice({
  name: 'statisticsSlice',
  initialState,
  reducers: {
    addDataToStatistics(state, action) {
      state.questions.allQuestions += action.payload['questions_quantity']
      state.questions.allCorrectAnswers += action.payload['correct_answers']

      if (action.payload['questions_category']) {
        state.categories[action.payload['questions_category']] +=
          action.payload['questions_quantity']
      }

      if (action.payload['questions_difficulty']) {
        state.difficulty[action.payload['questions_difficulty']] +=
          action.payload['questions_quantity']
      }

      if (action.payload['questions_type']) {
        if (action.payload['questions_type'] === 'Multiple') {
          state.type.multiple += action.payload['questions_quantity']
        }

        if (action.payload['questions_type'] === 'True/false') {
          state.type.boolean += action.payload['questions_quantity']
        }
      }
    }
  }
})

export const statisticsReducer = StatisticsSlice.reducer

export const { addDataToStatistics } = StatisticsSlice.actions
