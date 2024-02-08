import { Button } from './Button'

export const ResultsScreen = () => {
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
        <Button>Restart</Button>
        <Button>Choose another quiz</Button>
      </div>
    </div>
  )
}
