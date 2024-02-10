import img from '../../assets/images/error_img.png';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom'
import { ROUTE_HELPERS } from './ROUTE_HELPERS';

export const ErrorRouteScreen = () => {
  const navigate = useNavigate();

  // function handleGoMainPage() {
  //   navigate('/');
  // }

  return (
    <div className='error_wrapper'>
      <h1 className='error_h1'>Ooops, something went wrong.</h1>
      <img className='error_image' src={img} alt="Error image" />
      <Button onPush={() => ROUTE_HELPERS.handleGoMainPage(navigate)}>Back to menu</Button>
    </div>
  )
}