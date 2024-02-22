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

export const QuestionBlock = () => {
  const questionNumFromRedux = useSelector((store) => store.questionNum.value)
  const optionsFromRedux = useSelector((store) => store.quizOptions)
  const { data, isLoading, isFetching } = useGetQuestionFromInputQuery(optionsFromRedux)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  if (isLoading || isFetching) return <p>Loading...</p>

  let answersArr = [
    data.results[questionNumFromRedux]['correct_answer'],
    ...data.results[questionNumFromRedux]['incorrect_answers']
  ]
  shuffle(answersArr)

  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5)
  }

  const handleAnswersBtnsClick = (e) => {
    if (e.target.textContent === data.results[questionNumFromRedux]['correct_answer']) {
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
