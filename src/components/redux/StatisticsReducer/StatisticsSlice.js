import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions: {
    allQuestions: 0,
    allCorrectAnswers: 0
  },
  categories: {
    ["General Knowledge"]: 0,
    ["Entertainment: Books"]: 0,
    ["Entertainment: Film"]: 0,
    ["Entertainment: Music"]: 0,
    ["Entertainment: Musicals &amp; Theatres"]: 0,
    ["Entertainment: Television"]: 0,
    ["Entertainment: Video Games"]: 0,
    ["Entertainment: Board Games"]: 0,
    ["Science &amp; Nature"]: 0,
    ["Science: Computers"]: 0,
    ["Science: Mathematics"]: 0,
    ["Mythology"]: 0,
    ["Sports"]: 0,
    ["Geography"]: 0,
    ["History"]: 0,
    ["Politics"]: 0,
    ["Art"]: 0,
    ["Celebrities"]: 0,
    ["Animals"]: 0,
    ["Vehicles"]: 0,
    ["Entertainment: Comics"]: 0,
    ["Science: Gadgets"]: 0,
    ["Entertainment: Japanese Anime &amp; Manga"]: 0,
    ["Entertainment: Cartoon &amp; Animations"]: 0
  },
  difficulty: {
    easy: 0,
    medium: 0,
    hard: 0
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
      state.questions.allQuestions += 1

      state.categories[action.payload['category']] += 1
      state.difficulty[action.payload['difficulty']] += 1
      
      if (action.payload['type'] === 'multiple') {
        state.type.multiple += 1
      }

      if (action.payload['type'] === 'boolean') {
        state.type.boolean += 1
      }
    },
    incrementCorrectAnswer(state) {
      state.questions.allCorrectAnswers += 1
    }
  }
})

export const statisticsReducer = StatisticsSlice.reducer

export const { addDataToStatistics, incrementCorrectAnswer } = StatisticsSlice.actions
