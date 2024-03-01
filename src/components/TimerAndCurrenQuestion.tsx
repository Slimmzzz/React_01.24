import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTE_HELPERS } from './router/ROUTE_HELPERS'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'

export const QuizTimerAndCurrentQuestion = ({ quizEnd }: any) => {
  const optionsFromRedux = useSelector((store: RootState) => store.quizOptions)
  const questionNumFromRedux = useSelector((store: RootState) => store.questionNum)
  const [over, setOver] = useState(false)
  const [[min, sec], setTime] = useState([parseInt(optionsFromRedux['quiz_time']), 0])
  const navigate = useNavigate()
  const ref = useRef(null)

  useEffect(() => {
    function tick() {
      if (over) return

      if (min === 0 && sec === 0) {
        setOver(true)
        quizEnd()
      } else if (sec === 0) {
        setTime(([min]) => [min - 1, 59])
      } else {
        setTime(([min, sec]) => [min, sec - 1])
      }
    }

    const timerId = setInterval(() => tick(), 1000)

    if (min <= 0 && sec <= 0) {
      clearInterval(timerId)
      setOver(true)
      quizEnd()

      setTimeout(() => ROUTE_HELPERS.handleGoToResultsScreen(navigate), 2500)
    }

    return () => clearInterval(timerId)
  }, [min, sec, navigate, over, quizEnd])

  return (
    <div className="info_block">
      <p>
        Question: {questionNumFromRedux.value + 1} out of {optionsFromRedux['questions_quantity']}
      </p>
      {over ? (
        <div ref={ref} style={{ color: 'red', fontSize: '24px' }}>
          Time&lsquo;s up!
        </div>
      ) : (
        <span>Timer: {`${min.toString()}:${sec.toString().padStart(2, '0')}`}</span>
      )}
    </div>
  )
}
