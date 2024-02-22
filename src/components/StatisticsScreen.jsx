import { useSelector } from 'react-redux'
import { Button } from './Button'
import { ROUTE_HELPERS } from './router/ROUTE_HELPERS'
import { useNavigate } from 'react-router-dom'

export const StatisticsScreen = () => {
  const { questions, categories, difficulty, type, time } = useSelector(
    (state) => state.statistics
  )
  const navigate = useNavigate()

  return (
    <div className="container results_screen">
      <h1 className="h1">Quiz Machine</h1>
      <h2 className="h2">Your personal statistics:</h2>
      <Button onPush={() => ROUTE_HELPERS.handleGoMainPage(navigate)}>Back to main</Button>
      <div className="statistics_block">
        <ul className="list_block">
          <h3>General:</h3>
          <li className="list_item">
            <p>Overall number of questions: {questions.allQuestions}</p>
          </li>
          <li className="list_item">
            <p>Overall number of correct answers: {questions.allCorrectAnswers}</p>
          </li>
          <li className="list_item">
            <p>Overall time spent for quizes: {time.minutes}:{time.seconds.toString().padStart(2, '0')}</p>
          </li>

          <li className="list_item">
            <h3 className="h3">Amount of question by topics:</h3>
            <ul className="list_block">
              {Object.entries(categories).map((categoryItem, index) => (
                <li key={index} className="list_item">
                  <p>
                    {categoryItem[0]}: {categoryItem[1]}
                  </p>
                </li>
              ))}
            </ul>
          </li>

          <li className="list_item">
            <h3>Amount of question by difficulty:</h3>
            <ul className="list_block">
              {Object.entries(difficulty).map((difficultyItem, index) => (
                <li key={index} className="list_item">
                  <p>
                    {difficultyItem[0][0].toUpperCase() + difficultyItem[0].slice(1)}:{' '}
                    {difficultyItem[1]}
                  </p>
                </li>
              ))}
            </ul>
          </li>

          <li className="list_item">
            <h3>Amount of question by type:</h3>
            <ul className="list_block">
              <li className="list_item">
                <p>Multiple: {type.multiple}</p>
              </li>
              <li className="list_item">
                <p>True/false: {type.boolean}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
