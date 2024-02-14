import { createContext, useState } from 'react'
import { Button } from './Button'
import { QuestionBlock } from './QuestionBlock'
import { QuizTimerAndCurrentQuestion } from './TimerAndCurrenQuestion'
import { ModalWindow } from './ModalWindow'
import { createPortal } from 'react-dom'

export const MockDataContext = createContext()

export const QuizScreen = () => {
  const [isOpen, setIsOpen] = useState(false)

  let mockData = [
    {
      category: 'Celebrities',
      correct_answer: 'Abandoned Buildings and Dead Malls',
      difficulty: 'easy',
      incorrect_answers: ['Historic Landmarks', 'Action Films', 'Documentaries'],
      question: 'What does film maker Dan Bell typically focus his films on?',
      type: 'multiple'
    },
    {
      category: 'General Knowledge',
      correct_answer: 'Rosh Hashanah',
      difficulty: 'easy',
      incorrect_answers: ['Elul', 'New Year', 'Succoss'],
      question: 'What is the name of the Jewish New Year?',
      type: 'multiple'
    }
  ]

  function handleCloseModal() {
    setIsOpen(false)
  }

  return (
    <div className="container quiz_screen">
      <h1 className="h1">Quiz Machine</h1>
      <QuizTimerAndCurrentQuestion />

      <MockDataContext.Provider value={mockData}>
        <QuestionBlock />
      </MockDataContext.Provider>

      <Button onPush={() => setIsOpen(true)}>End quiz</Button>

      {isOpen ? createPortal(<ModalWindow closeModal={handleCloseModal} />, document.body) : null}
    </div>
  )
}
