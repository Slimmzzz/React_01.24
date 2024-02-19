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
                <p>General Knowledge: {statisticsDataFromRedux.categories["General Knowledge"]}</p>
              </li>
              <li className="list_item">
                <p>Entertainment: Books: {statisticsDataFromRedux.categories["Entertainment: Books"]}</p>
              </li>
              <li className="list_item">
                <p>Entertainment: Film: {statisticsDataFromRedux.categories["Entertainment: Film"]}</p>
              </li>
              <li className="list_item">
                <p>Entertainment: Music: {statisticsDataFromRedux.categories["Entertainment: Music"]}</p>
              </li>
              <li className="list_item">
                <p>
                  Entertainment: Musicals & Theatres: {statisticsDataFromRedux.categories["Entertainment: Musicals &amp; Theatres"]}
                </p>
              </li>
              <li className="list_item">
                <p>Entertainment: Television: {statisticsDataFromRedux.categories["Entertainment: Television"]}</p>
              </li>
              <li className="list_item">
                <p>Entertainment: Video Games: {statisticsDataFromRedux.categories["Entertainment: Video Games"]}</p>
              </li>
              <li className="list_item">
                <p>Entertainment: Board Games: {statisticsDataFromRedux.categories["Entertainment: Board Games"]}</p>
              </li>
              <li className="list_item">
                <p>Science & Nature: {statisticsDataFromRedux.categories["Science &amp; Nature"]}</p>
              </li>
              <li className="list_item">
                <p>Science: Computers: {statisticsDataFromRedux.categories["Science: Computers"]}</p>
              </li>
              <li className="list_item">
                <p>Science: Mathematics: {statisticsDataFromRedux.categories["Science: Mathematics"]}</p>
              </li>
              <li className="list_item">
                <p>Mythology: {statisticsDataFromRedux.categories["Mythology"]}</p>
              </li>
              <li className="list_item">
                <p>Sports: {statisticsDataFromRedux.categories["Sports"]}</p>
              </li>
              <li className="list_item">
                <p>Geography: {statisticsDataFromRedux.categories["Geography"]}</p>
              </li>
              <li className="list_item">
                <p>History: {statisticsDataFromRedux.categories["History"]}</p>
              </li>
              <li className="list_item">
                <p>Politics: {statisticsDataFromRedux.categories["Politics"]}</p>
              </li>
              <li className="list_item">
                <p>Art: {statisticsDataFromRedux.categories["Art"]}</p>
              </li>
              <li className="list_item">
                <p>Celebrities: {statisticsDataFromRedux.categories["Celebrities"]}</p>
              </li>
              <li className="list_item">
                <p>Animals: {statisticsDataFromRedux.categories["Animals"]}</p>
              </li>
              <li className="list_item">
                <p>Vehicles: {statisticsDataFromRedux.categories["Vehicles"]}</p>
              </li>
              <li className="list_item">
                <p>Entertainment: Comics: {statisticsDataFromRedux.categories["Entertainment: Comics"]}</p>
              </li>
              <li className="list_item">
                <p>Science: Gadgets: {statisticsDataFromRedux.categories["Science: Gadgets"]}</p>
              </li>
              <li className="list_item">
                <p>
                  Entertainment: Japanese Anime & Manga: {statisticsDataFromRedux.categories["Entertainment: Japanese Anime &amp; Manga"]}
                </p>
              </li>
              <li className="list_item">
                <p>
                  Entertainment: Cartoon & Animations: {statisticsDataFromRedux.categories["Entertainment: Cartoon &amp; Animations"]}
                </p>
              </li>
            </ul>
          </li>

          <li className="list_item">
            <h3>Amount of question by difficulty:</h3>
            <ul className="list_block">
              <li className="list_item">
                <p>Easy: {statisticsDataFromRedux.difficulty.easy}</p>
              </li>
              <li className="list_item">
                <p>Medium: {statisticsDataFromRedux.difficulty.medium}</p>
              </li>
              <li className="list_item">
                <p>Hard: {statisticsDataFromRedux.difficulty.hard}</p>
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
