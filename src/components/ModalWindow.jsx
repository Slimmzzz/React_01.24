import { useNavigate } from 'react-router-dom'
import { Button } from './Button'
import { ROUTE_HELPERS } from './router/ROUTE_HELPERS'
import { useDispatch } from 'react-redux'
import { resetQuestionsNum } from './redux/questionNumReducer/questionNumReducer'
import { resetOptions } from './redux/optionsReducer/optionsReducer'

export const ModalWindow = ({ closeModal }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <>
      <div className="layout"></div>
      <div className="modal_wrapper">
        <h3>Are you sure?</h3>
        <Button
          onPush={() => {
            ROUTE_HELPERS.handleGoMainPage(navigate)
            dispatch(resetQuestionsNum())
            dispatch(resetOptions())
          }}>
          Confirm
        </Button>
        <Button onPush={closeModal}>Cancel</Button>
      </div>
    </>
  )
}
