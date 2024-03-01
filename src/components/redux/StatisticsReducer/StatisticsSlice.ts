import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IStatsSlice {
  questions: {
    allQuestions: number
    allCorrectAnswers: number
  },
  categories: Record<string, number>
  difficulty: Record<string, number>
  type: {
    boolean: number
    multiple: number
  },
  time: {
    minutes: number
    seconds: number
  }
}

const initialState = {
  questions: {
    allQuestions: 0,
    allCorrectAnswers: 0
  },
  categories: {},
  difficulty: {},
  type: {
    boolean: 0,
    multiple: 0
  },
  time: {
    minutes: 0,
    seconds: 0
  }
}

export const StatisticsSlice = createSlice({
  name: 'statisticsSlice',
  initialState: initialState as IStatsSlice,
  reducers: {
    addDataToStatistics(state, action: PayloadAction<Record<string, any>>) {
      state.questions.allQuestions += 1

      if (action.payload['category'] in state.categories) {
        state.categories[action.payload['category']] += 1
      } else {
        state.categories[action.payload['category']] = 1
      }

      if (action.payload['difficulty'] in state.difficulty) {
        state.difficulty[action.payload['difficulty']] += 1
      } else {
        state.difficulty[action.payload['difficulty']] = 1
      }

      if (action.payload['type'] === 'multiple') {
        state.type.multiple += 1
      }

      if (action.payload['type'] === 'boolean') {
        state.type.boolean += 1
      }
    },
    incrementCorrectAnswer(state) {
      state.questions.allCorrectAnswers += 1
    },
    addTimeSpentToStatistics(state, action) {
      state.time.seconds += action.payload.seconds
      state.time.minutes += action.payload.minutes

      if (state.time.seconds >= 60) {
        state.time.minutes += 1
        state.time.seconds -= 60
      }
    }
  }
})

export const statisticsReducer = StatisticsSlice.reducer

export const { addDataToStatistics, incrementCorrectAnswer, addTimeSpentToStatistics } =
  StatisticsSlice.actions
