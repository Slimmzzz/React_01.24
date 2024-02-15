import { useContext } from 'react'
import { Button } from './Button'
import { MockDataContext } from './QuizScreen'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ROUTE_HELPERS } from './router/ROUTE_HELPERS'
import { increment } from './redux/questionNumReducer/questionNumReducer'

export const QuestionBlock = () => {
  let mockDataContext = useContext(MockDataContext)
  const questionNumFromRedux = useSelector((store) => store.questionNum.value)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  let answersArr = [
    mockDataContext[questionNumFromRedux]['correct_answer'],
    ...mockDataContext[questionNumFromRedux]['incorrect_answers']
  ]
  shuffle(answersArr)

  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5)
  }

  const handleAnswersBtnsClick = () => {
    if (mockDataContext[questionNumFromRedux + 1]) {
      dispatch(increment())
    } else {
      ROUTE_HELPERS.handleGoToResultsScreen(navigate)
    }
  }

  return (
    <div className="question_block">
      <p>{mockDataContext[questionNumFromRedux].question}</p>

      <div className="answer_btns">
        {answersArr.map((answer) => (
          <Button onPush={handleAnswersBtnsClick} key={answer}>
            {answer}
          </Button>
        ))}
      </div>
    </div>
  )
}
