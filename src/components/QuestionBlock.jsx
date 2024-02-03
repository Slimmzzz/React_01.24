import { useContext } from 'react'
import { Button } from './Button'
import { MockDataContext } from '../App'

export default function QuestionBlock() {
  let mockDataContext = useContext(MockDataContext)

  let answersArr = [
    mockDataContext[0]['correct_answer'],
    ...mockDataContext[0]['incorrect_answers']
  ]
  shuffle(answersArr)

  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5)
  }

  return (
    <div className="question_block">
      <p>{mockDataContext[0].question}</p>

      <div className="answer_btns">
        {answersArr.map((answer) => (
          <Button key={answer}>{answer}</Button>
        ))}
      </div>
    </div>
  )
}
