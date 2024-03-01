import { OptionSelect } from './OptionSelect'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom'
import { ROUTE_HELPERS } from './router/ROUTE_HELPERS'
import { useLoaderData } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  setQuestionsCategory,
  setQuestionsDifficulty,
  setQuestionsQuantity,
  setQuestionsType,
  setQuizTime
} from './redux/optionsReducer/optionsReducer'

export function QuizOptions() {
  const topics = useLoaderData() as {trivia_categories: any[]}
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const topicsArr = topics['trivia_categories'].map(
    (question) => `${question.id} - ${question.name}`
  )

  const onChangeHandler = (e: any) => {
    switch (e.target.id) {
      case 'questions_quantity':
        dispatch(setQuestionsQuantity(e.target.value))
        break
      case 'questions_category':
        dispatch(setQuestionsCategory(e.target.value))
        break
      case 'questions_difficulty':
        dispatch(setQuestionsDifficulty(e.target.value))
        break
      case 'questions_type':
        dispatch(setQuestionsType(e.target.value))
        break
      case 'quiz_time':
        dispatch(setQuizTime(e.target.value))
        break
    }
  }

  let inputsOptions = [
    {
      id: 'questions_quantity',
      inputType: 'input',
      optionType: 'Number of questions(from 5 to 15):',
      values: [5, 15]
    },
    {
      id: 'questions_category',
      inputType: 'select',
      optionType: 'Select questions category:',
      values: ['Any category', ...topicsArr]
    },
    {
      id: 'questions_difficulty',
      inputType: 'select',
      optionType: 'Select difficulty:',
      values: ['Any difficulty', 'Easy', 'Medium', 'Hard']
    },
    {
      id: 'questions_type',
      inputType: 'select',
      optionType: 'Select answers type:',
      values: ['Any type', 'Multiple', 'True/false']
    },
    {
      id: 'quiz_time',
      inputType: 'select',
      optionType: 'Choose quiz time:',
      values: ['1m', '2m', '5m']
    }
  ]

  return (
    <>
      <ul>
        {inputsOptions.map((optionsObj) => {
          return <OptionSelect key={optionsObj.id} onChange={onChangeHandler} {...optionsObj} />
        })}
      </ul>

      <div className="buttons_container">
        <Button onPush={() => ROUTE_HELPERS.handleGoToQuizScreen(navigate)}>Start quiz</Button>
        <Button onPush={() => ROUTE_HELPERS.handleGoToStatisticsScreen(navigate)}>
          See my statistics
        </Button>
      </div>
    </>
  )
}
