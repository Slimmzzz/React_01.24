export type quizEndFunc = { quizEnd: () => void }
export type closeModalFunc = { closeModal: () => void }

interface QuizOptions {
  questions_quantity: number
  questions_category: string
  questions_difficulty: string
  questions_type: string
  quiz_time: string
}

export interface Statistics {
  questions: {
    allQuestions: number
    allCorrectAnswers: number
  }
  categories: {
    [categoryName: string]: number
  }
  difficulty: {
    [difficultyType: string]: number
  }
  type: {
    boolean: number
    multiple: number
  }
  time: {
    minutes: number
    seconds: number
  }
}

interface PayloadForStatistics {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export interface SpentTimeForStatisticsAction {
  type: string
  payload: {
    minutes: number
    seconds: number
  }
}

export interface StatisticsAction {
  payload: PayloadForStatistics
  type: string
}

export interface RootState {
  quizOptions: QuizOptions
  statistics: Statistics
  questionNum: { value: number }
  correctAnswersAmount: {
    correctAnswersAmount: number
  }
  timeSpentForQuiz: {
    minutes: number
    seconds: number
  }
}

interface CategoryItem {
  id: number
  name: string
}
export interface TopicsFromApi {
  trivia_categories: CategoryItem[]
}

interface InputDataWithStringValues {
  id: string
  inputType: string
  optionType: string
  values: string[]
}

interface InputDataWithNumberValues {
  id: string
  inputType: string
  optionType: string
  values: number[]
}

export type QuizInputsOptions = (InputDataWithNumberValues | InputDataWithStringValues)[]

export interface PropsToOptionSelectInputs {
  inputType: string
  optionType: string
  id: string
  values: number[] | string[]
  onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void
}

export interface ButtonsProps {
  onPush: React.MouseEventHandler<HTMLButtonElement>
  children: string
}

export interface OptionsDataWithStringPayload {
  payload: string
  type: string
}

export interface OptionsDataWithNumberPayload {
  payload: number
  type: string
}

export interface QuizOptionsForRTK {
  questions_quantity: number
  questions_category: string
  questions_difficulty: string
  questions_type: string
  quiz_time: string
}

export interface PayloadForSpentTime {
  type: string
  payload: number[]
}
