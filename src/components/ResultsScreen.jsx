import { Button } from './Button'
import { useNavigate } from 'react-router-dom'
import { ROUTE_HELPERS } from './router/ROUTE_HELPERS'
import { useSelector, useDispatch } from 'react-redux'
import { resetQuestionsNum } from './redux/questionNumReducer/questionNumReducer'
import { resetOptions } from './redux/optionsReducer/optionsReducer'
import { resetCorrectSlice } from './redux/correctAnswersReducer/correctAnswersSlice'
import { resetTimeSpent } from './redux/timeSpentForQuiz/timeSpentForQuiz'
import { addTimeSpentToStatistics } from './redux/StatisticsReducer/StatisticsSlice'
import { useGetQuestionFromInputQuery } from './redux/QuestionsApi'
import { motion } from 'framer-motion'

export const ResultsScreen = () => {
  const navigate = useNavigate()
  const optionsFromRedux = useSelector((store) => store.quizOptions)
  const { refetch } = useGetQuestionFromInputQuery(optionsFromRedux)
  const correctAnswersAmountFromRedux = useSelector(
    (state) => state.correctAnswersAmount.correctAnswersAmount
  )
  const timeSpentFromRedux = useSelector((state) => state.timeSpentForQuiz)
  const dispatch = useDispatch()

  return (
    <motion.div
      className="container results_screen"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}>
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
      <h4 className="h4">
        Time spent: {timeSpentFromRedux.minutes}:
        {timeSpentFromRedux.seconds.toString().padStart(2, '0')}
      </h4>
      <div className="btns_wrapper">
        <Button
          onPush={() => {
            ROUTE_HELPERS.handleGoToQuizScreen(navigate)
            refetch()
            dispatch(addTimeSpentToStatistics(timeSpentFromRedux))
            dispatch(resetQuestionsNum())
            dispatch(resetCorrectSlice())
            dispatch(resetTimeSpent())
          }}>
          Restart
        </Button>
        <Button
          onPush={() => {
            ROUTE_HELPERS.handleGoMainPage(navigate)
            dispatch(addTimeSpentToStatistics(timeSpentFromRedux))
            dispatch(resetOptions())
            dispatch(resetQuestionsNum())
            dispatch(resetCorrectSlice())
            dispatch(resetTimeSpent())
          }}>
          Choose another quiz
        </Button>
      </div>
    </motion.div>
  )
}
