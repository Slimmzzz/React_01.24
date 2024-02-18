import { useSelector } from 'react-redux'
import { Button } from './Button'
import { ROUTE_HELPERS } from './router/ROUTE_HELPERS'
import { useNavigate } from 'react-router-dom'

export const StatisticsScreen = () => {
  const statisticsDataFromRedux = useSelector((state) => state.statistics)
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
            <p>Overall number of questions: {statisticsDataFromRedux.questions.allQuestions}</p>
          </li>
          <li className="list_item">
            <p>
              Overall number of correct answers:{' '}
              {statisticsDataFromRedux.questions.allCorrectAnswers}
            </p>
          </li>

          <li className="list_item">
            <h3 className="h3">Amount of question by topics:</h3>
            <ul className="list_block">
              <li className="list_item">
                <p>General Knowledge: {statisticsDataFromRedux.categories['9']}</p>
              </li>
              <li className="list_item">
                <p>Entertainment: Books: {statisticsDataFromRedux.categories['10']}</p>
              </li>
              <li className="list_item">
                <p>Entertainment: Film: {statisticsDataFromRedux.categories['11']}</p>
              </li>
              <li className="list_item">
                <p>Entertainment: Music: {statisticsDataFromRedux.categories['12']}</p>
              </li>
              <li className="list_item">
                <p>
                  Entertainment: Musicals & Theatres: {statisticsDataFromRedux.categories['13']}
                </p>
              </li>
              <li className="list_item">
                <p>Entertainment: Television: {statisticsDataFromRedux.categories['14']}</p>
              </li>
              <li className="list_item">
                <p>Entertainment: Video Games: {statisticsDataFromRedux.categories['15']}</p>
              </li>
              <li className="list_item">
                <p>Entertainment: Board Games: {statisticsDataFromRedux.categories['16']}</p>
              </li>
              <li className="list_item">
                <p>Science & Nature: {statisticsDataFromRedux.categories['17']}</p>
              </li>
              <li className="list_item">
                <p>Science: Computers: {statisticsDataFromRedux.categories['18']}</p>
              </li>
              <li className="list_item">
                <p>Science: Mathematics: {statisticsDataFromRedux.categories['19']}</p>
              </li>
              <li className="list_item">
                <p>Mythology: {statisticsDataFromRedux.categories['20']}</p>
              </li>
              <li className="list_item">
                <p>Sports: {statisticsDataFromRedux.categories['21']}</p>
              </li>
              <li className="list_item">
                <p>Geography: {statisticsDataFromRedux.categories['22']}</p>
              </li>
              <li className="list_item">
                <p>History: {statisticsDataFromRedux.categories['23']}</p>
              </li>
              <li className="list_item">
                <p>Politics: {statisticsDataFromRedux.categories['24']}</p>
              </li>
              <li className="list_item">
                <p>Art: {statisticsDataFromRedux.categories['25']}</p>
              </li>
              <li className="list_item">
                <p>Celebrities: {statisticsDataFromRedux.categories['26']}</p>
              </li>
              <li className="list_item">
                <p>Animals: {statisticsDataFromRedux.categories['27']}</p>
              </li>
              <li className="list_item">
                <p>Vehicles: {statisticsDataFromRedux.categories['28']}</p>
              </li>
              <li className="list_item">
                <p>Entertainment: Comics: {statisticsDataFromRedux.categories['29']}</p>
              </li>
              <li className="list_item">
                <p>Science: Gadgets: {statisticsDataFromRedux.categories['30']}</p>
              </li>
              <li className="list_item">
                <p>
                  Entertainment: Japanese Anime & Manga: {statisticsDataFromRedux.categories['31']}
                </p>
              </li>
              <li className="list_item">
                <p>
                  Entertainment: Cartoon & Animations: {statisticsDataFromRedux.categories['32']}
                </p>
              </li>
            </ul>
          </li>

          <li className="list_item">
            <h3>Amount of question by difficulty:</h3>
            <ul className="list_block">
              <li className="list_item">
                <p>Easy: {statisticsDataFromRedux.difficulty.Easy}</p>
              </li>
              <li className="list_item">
                <p>Medium: {statisticsDataFromRedux.difficulty.Medium}</p>
              </li>
              <li className="list_item">
                <p>Hard: {statisticsDataFromRedux.difficulty.Hard}</p>
              </li>
            </ul>
          </li>

          <li className="list_item">
            <h3>Amount of question by type:</h3>
            <ul className="list_block">
              <li className="list_item">
                <p>Multiple: {statisticsDataFromRedux.type.multiple}</p>
              </li>
              <li className="list_item">
                <p>True/false: {statisticsDataFromRedux.type.boolean}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
