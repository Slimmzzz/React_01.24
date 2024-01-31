import { ButtonsContainer } from './components/ButtonsContainer'
import QuizOptions from './components/QuizOptions'

function App() {
  return (
    <div className="container">
      <h1 className="h1">Quiz Machine</h1>
      <QuizOptions />
      <ButtonsContainer />
    </div>
  )
}

export default App
