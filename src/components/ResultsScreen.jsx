import { Button } from './Button'
import { useNavigate } from 'react-router-dom'
import { ROUTE_HELPERS } from './router/ROUTE_HELPERS'
import { useSelector, useDispatch } from 'react-redux'
import { resetQuestionsNum } from './redux/questionNumReducer/questionNumReducer'
import { resetOptions } from './redux/optionsReducer/optionsReducer'
import { resetCorrectSlice } from './redux/correctAnswersReducer/correctAnswersSlice'

export const ResultsScreen = () => {
  const navigate = useNavigate()
  const optionsFromRedux = useSelector((store) => store.quizOptions)
  const correctAnswersAmountFromRedux = useSelector(
    (state) => state.correctAnswersAmount.correctAnswersAmount
  )
  const dispatch = useDispatch()

  return (
    <div className="container results_screen">
      <h1 className="h1">Thank you for completing this quiz. Here are your results</h1>
      <p className="correct_answers">
        You answered {correctAnswersAmountFromRedux} out of {optionsFromRedux['questions_quantity']}{' '}
        questions correctly
      </p>
      <div className="chosenOptions_block">
        <h4 className="h4">Chosen quiz options:</h4>
        <ul>
          <li>
            Questions category:{' '}
            {optionsFromRedux['questions_category']
              ? optionsFromRedux['questions_category'].slice(4).trim()
              : 'Any category'}
          </li>
          <li>
            Difficulty level:{' '}
            {optionsFromRedux['questions_difficulty']
              ? optionsFromRedux['questions_difficulty']
              : 'Any difficulty'}
          </li>
          <li>
            Questions type:{' '}
            {optionsFromRedux['questions_type'] ? optionsFromRedux['questions_type'] : 'Any type'}
          </li>
          <li>
            Quiz time: {parseInt(optionsFromRedux['quiz_time'])}{' '}
            {parseInt(optionsFromRedux['quiz_time']) === 1 ? 'minute' : 'minutes'}
          </li>
        </ul>
      </div>
      <h4 className="h4">Time spent: 2:33</h4>
      <div className="btns_wrapper">
        <Button
          onPush={() => {
            ROUTE_HELPERS.handleGoToQuizScreen(navigate)
            dispatch(resetQuestionsNum())
            dispatch(resetCorrectSlice())
          }}>
          Restart
        </Button>
        <Button
          onPush={() => {
            ROUTE_HELPERS.handleGoMainPage(navigate)
            dispatch(resetOptions())
            dispatch(resetQuestionsNum())
            dispatch(resetCorrectSlice())
          }}>
          Choose another quiz
        </Button>
      </div>
    </div>
  )
}
