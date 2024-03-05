import { Button } from './Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ROUTE_HELPERS } from './router/ROUTE_HELPERS'
import { increment } from './redux/questionNumReducer/questionNumReducer'
import { useGetQuestionFromInputQuery } from './redux/QuestionsApi'
import { correctAnswersIncrement } from './redux/correctAnswersReducer/correctAnswersSlice'
import {
  addDataToStatistics,
  incrementCorrectAnswer
} from './redux/StatisticsReducer/StatisticsSlice'
import { decode } from 'html-entities'
import React from 'react'
import { RootState } from '../Types/Types'
import { shuffle } from './Utilities/arrayShuffle'

export const QuestionBlock = () => {
  const questionNumFromRedux = useSelector((store: RootState) => store.questionNum.value)
  const optionsFromRedux = useSelector((store: RootState) => store.quizOptions)
  const { data, isLoading, isFetching } = useGetQuestionFromInputQuery(optionsFromRedux)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  if (isLoading || isFetching) return <p>Loading...</p>

  const answersArr = [
    data.results[questionNumFromRedux]['correct_answer'],
    ...data.results[questionNumFromRedux]['incorrect_answers']
  ]

  shuffle(answersArr)

  const handleAnswersBtnsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    if (target.textContent === data.results[questionNumFromRedux]['correct_answer']) {
      dispatch(incrementCorrectAnswer())
      dispatch(correctAnswersIncrement())
    }
    
    dispatch(addDataToStatistics(data.results[questionNumFromRedux]))

    if (data.results[questionNumFromRedux + 1]) {
      dispatch(increment())
    } else {
      ROUTE_HELPERS.handleGoToResultsScreen(navigate)
    }
  }

  return (
    <div className="question_block">
      <div className="question_text_block">
        <p>{decode(data.results[questionNumFromRedux].question)}</p>
      </div>

      <div className="answer_btns">
        {answersArr.map((answer) => (
          <Button onPush={handleAnswersBtnsClick} key={answer}>
            {decode(answer)}
          </Button>
        ))}
      </div>
    </div>
  )
}
