import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from './Button'
import { QuestionBlock } from './QuestionBlock'
import { QuizTimerAndCurrentQuestion } from './TimerAndCurrenQuestion'
import { ModalWindow } from './ModalWindow'
import { createPortal } from 'react-dom'
import { addTimeSpentForQuiz } from './redux/timeSpentForQuiz/timeSpentForQuiz'

export const QuizScreen = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOver, setIsOver] = useState(false)
  const dispatch = useDispatch()

  function handleCloseModal() {
    setIsOpen(false)
  }

  function quizFinishHandler() {
    setIsOver(true)
  }

  useEffect(() => {
    let min = 0
    let sec = 0

    function tick() {
      if (isOver) return

      if (sec >= 59) {
        min += 1
        sec = 0
      } else {
        sec += 1
      }
    }

    const timerId = setInterval(() => tick(), 1000)

    return () => {
      clearInterval(timerId)
      dispatch(addTimeSpentForQuiz([min, sec]))
    }
  })

  return (
    <div className="container quiz_screen">
      <h1 className="h1">Quiz Machine</h1>
      <QuizTimerAndCurrentQuestion quizEnd={() => quizFinishHandler()} />
      <QuestionBlock />
      <Button onPush={() => setIsOpen(true)}>End quiz</Button>

      {isOpen ? createPortal(<ModalWindow closeModal={handleCloseModal} />, document.body) : null}
    </div>
  )
}
