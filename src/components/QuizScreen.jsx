import { Button } from './Button'
import QuestionBlock from './QuestionBlock'
import TimerAndCurrentQuestion from './TimerAndCurrenQuestion'

export default function QuizScreen() {
  return (
    <div className="container quiz_screen">
      <h1 className="h1">Quiz Machine</h1>
      <TimerAndCurrentQuestion />
      <QuestionBlock />
      <Button>End quiz</Button>
    </div>
  )
}
