import OptionSelect from './OptionSelect'

export default function QuizOptions() {
  let inputsOptions = [
    {
      id: 'questions_quantity',
      inputType: 'input',
      optionType: 'Number of questions:',
      values: [5, 15]
    },
    {
      id: 'questions_category',
      inputType: 'select',
      optionType: 'Select questions category:',
      values: ['One']
    },
    {
      id: 'questions_difficulty',
      inputType: 'select',
      optionType: 'Select difficulty:',
      values: ['Easy']
    },
    {
      id: 'questions_type',
      inputType: 'select',
      optionType: 'Select answers type:',
      values: ['Multiple']
    },
    {
      id: 'quiz_time',
      inputType: 'select',
      optionType: 'Choose quiz time:',
      values: ['1m', '2m', '3m']
    }
  ]
  return (
    <ul>
      {inputsOptions.map((optionsObj) => {
        return <OptionSelect key={optionsObj.id} {...optionsObj} />
      })}
    </ul>
  )
}
