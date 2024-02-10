import { useState } from 'react'
import { OptionSelect } from './OptionSelect'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom'
import { ROUTE_HELPERS } from './router/ROUTE_HELPERS'

export default function QuizOptions() {
  const navigate = useNavigate()
  const [optionsList, SetOptionsList] = useState({
    questions_quantity: 5,
    questions_category: 'One',
    questions_difficulty: 'Easy',
    questions_type: 'Multiple',
    quiz_time: '1m'
  })

  function onChangeHandler(e) {
    SetOptionsList(optionsList, (optionsList[e.target.id] = e.target.value))
  }

  // function handleGoToQuizScreen() {
  //   navigate('/quiz');
  // }

  // function handleGoToStatisticsScreen() {
  //   navigate('/statistics');
  // }

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
      values: ['One', 'History', 'Politics']
    },
    {
      id: 'questions_difficulty',
      inputType: 'select',
      optionType: 'Select difficulty:',
      values: ['Easy', 'Medium', 'Hard']
    },
    {
      id: 'questions_type',
      inputType: 'select',
      optionType: 'Select answers type:',
      values: ['Multiple', 'True/false']
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
        <Button onPush={() => ROUTE_HELPERS.handleGoToStatisticsScreen(navigate)}>See my statistics</Button>
      </div>
    </>
  )
}
