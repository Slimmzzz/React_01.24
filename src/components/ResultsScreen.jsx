import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

export const ResultsScreen = () => {
  const navigate = useNavigate();

  // function handleGoMainPage() {
  //   navigate('/');
  // }

  // function handleGoToQuizScreen() {
  //   navigate('/quiz');
  // }

  return (
    <div className="container results_screen">
      <h1 className="h1">Thank you for completing this quiz. Here are your results</h1>
      <p className="correct_answers">You answered 5 out of 10 questions correctly</p>
      <div className="chosenOptions_block">
        <h4 className="h4">Chosen quiz options:</h4>
        <ul>
          <li>Questions category: Politics</li>
          <li>Difficulty level: Easy</li>
          <li>Answers type: Multiply</li>
          <li>Quiz time: 2 minutes</li>
        </ul>
      </div>
      <h4 className="h4">Time spent: 2:33</h4>
      <div className="btns_wrapper">
        <Button onPush={() => handleGoToQuizScreen(navigate)}>Restart</Button>
        <Button onPush={() => handleGoMainPage(navigate)}>Choose another quiz</Button>
      </div>
    </div>
  )
}
