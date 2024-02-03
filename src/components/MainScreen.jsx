import { ButtonsContainer } from './ButtonsContainer'
import QuizOptions from './QuizOptions'

export default function MainScreen() {
  return (
    <div className="container main_screen">
      <h1 className="h1">Quiz Machine</h1>
      <QuizOptions />
      <ButtonsContainer />
    </div>
  )
}
