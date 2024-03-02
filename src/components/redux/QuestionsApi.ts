import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { QuizOptionsForRTK } from '../../Types/Types'

export const questionsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://opentdb.com/api.php' }),
  reducerPath: 'questionsApi',
  endpoints: (build) => ({
    getQuestionFromInput: build.query({
      query: ({
        questions_quantity,
        questions_category,
        questions_difficulty,
        questions_type
      }: QuizOptionsForRTK): string => {
        let resultQuery = `?amount=${questions_quantity}`

        if (questions_category) {
          resultQuery += `&category=${questions_category.slice(0, 2).trim()}`
        }

        if (questions_difficulty) {
          resultQuery += `&difficulty=${questions_difficulty.toLowerCase()}`
        }

        if (questions_type) {
          if (questions_type === 'True/false') {
            resultQuery += `&type=boolean`
          }
          if (questions_type === 'Multiple') {
            resultQuery += `&type=multiple`
          }
        }

        return resultQuery
      }
    })
  })
})

export const { useGetQuestionFromInputQuery } = questionsApi
