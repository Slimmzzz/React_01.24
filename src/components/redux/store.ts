import { questionsApi } from './QuestionsApi'
import { statisticsReducer } from './StatisticsReducer/StatisticsSlice'
import { correctAnswersReducer } from './correctAnswersReducer/correctAnswersSlice'
import { optionsReducer } from './optionsReducer/optionsReducer'
import { questionNumReducer } from './questionNumReducer/questionNumReducer'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { timeSpentForQuizReducer } from './timeSpentForQuiz/TimeSpentForQuiz'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

const combinedReducers = combineReducers({
  quizOptions: optionsReducer,
  [questionsApi.reducerPath]: questionsApi.reducer,
  statistics: statisticsReducer,
  questionNum: questionNumReducer,
  correctAnswersAmount: correctAnswersReducer,
  timeSpentForQuiz: timeSpentForQuizReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['statistics']
}

const persistedReducer = persistReducer(persistConfig, combinedReducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (gDM) =>
    gDM({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(questionsApi.middleware)
})

export const persistor = persistStore(store)
