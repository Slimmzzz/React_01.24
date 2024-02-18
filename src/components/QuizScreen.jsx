import { useState } from 'react'
import { Button } from './Button'
import { QuestionBlock } from './QuestionBlock'
import { QuizTimerAndCurrentQuestion } from './TimerAndCurrenQuestion'
import { ModalWindow } from './ModalWindow'
import { createPortal } from 'react-dom'

export const QuizScreen = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleCloseModal() {
    setIsOpen(false)
  }

  return (
    <div className="container quiz_screen">
      <h1 className="h1">Quiz Machine</h1>
      <QuizTimerAndCurrentQuestion />
      <QuestionBlock />
      <Button onPush={() => setIsOpen(true)}>End quiz</Button>

      {isOpen ? createPortal(<ModalWindow closeModal={handleCloseModal} />, document.body) : null}
    </div>
  )
}
