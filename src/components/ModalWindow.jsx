import { useNavigate } from 'react-router-dom'
import { Button } from './Button'
import { ROUTE_HELPERS } from './router/ROUTE_HELPERS'
import { useDispatch, useSelector } from 'react-redux'
import { resetQuestionsNum } from './redux/questionNumReducer/questionNumReducer'
import { resetOptions } from './redux/optionsReducer/optionsReducer'
import { resetTimeSpent } from './redux/timeSpentForQuiz/timeSpentForQuiz'
import { useGetQuestionFromInputQuery } from './redux/QuestionsApi'

export const ModalWindow = ({ closeModal }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const optionsFromRedux = useSelector((store) => store.quizOptions)
  const { refetch } = useGetQuestionFromInputQuery(optionsFromRedux)

  return (
    <>
      <div className="layout"></div>
      <div className="modal_wrapper">
        <h3>Are you sure?</h3>
        <Button
          onPush={() => {
            ROUTE_HELPERS.handleGoMainPage(navigate)
            refetch()
            dispatch(resetQuestionsNum())
            dispatch(resetOptions())
            dispatch(resetTimeSpent())
          }}>
          Confirm
        </Button>
        <Button onPush={closeModal}>Cancel</Button>
      </div>
    </>
  )
}
