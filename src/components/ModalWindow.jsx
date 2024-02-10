import { useNavigate } from 'react-router-dom'
import { Button } from "./Button";
import { ROUTE_HELPERS } from './router/ROUTE_HELPERS';

export const ModalWindow = ({ closeModal }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="layout"></div>
      <div className="modal_wrapper">
        <h3>Are you sure?</h3>
        <Button onPush={() => ROUTE_HELPERS.handleGoMainPage(navigate)}>Confirm</Button>
        <Button onPush={closeModal}>Cancel</Button>
      </div>
    </>
  )
}