import { createContext } from 'react'
import MainScreen from './components/MainScreen'
import QuizScreen from './components/QuizScreen'
import { ResultsScreen } from './components/ResultsScreen'

export const MockDataContext = createContext()

function App() {
  let mockData = [
    {
      category: 'Celebrities',
      correct_answer: 'Abandoned Buildings and Dead Malls',
      difficulty: 'easy',
      incorrect_answers: ['Historic Landmarks', 'Action Films', 'Documentaries'],
      question: 'What does film maker Dan Bell typically focus his films on?',
      type: 'multiple'
    }
  ]
  return (
    <>
      <MainScreen />
      <MockDataContext.Provider value={mockData}>
        <QuizScreen />
      </MockDataContext.Provider>
      <ResultsScreen />
    </>
  )
}

export default App
