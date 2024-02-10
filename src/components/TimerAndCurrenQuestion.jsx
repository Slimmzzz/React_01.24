import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTE_HELPERS } from './router/ROUTE_HELPERS'

export const QuizTimerAndCurrentQuestion = ({ minutes = 1 }) => {
  const [over, setOver] = useState(false)
  const [[min, sec], setTime] = useState([minutes, 0])
  const navigate = useNavigate();
  const ref = useRef(null);

  function tick() {
    if (over) return

    if (min === 0 && sec === 0) {
      setOver(true)
    } else if (sec === 0) {
      setTime(([min, sec]) => [min - 1, 59])
    } else {
      setTime(([min, sec]) => [min, sec - 1])
    }
  }

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000)

    if (min <= 0 && sec <= 0) {
      clearInterval(timerId);
      setOver(true)

      setTimeout(() => ROUTE_HELPERS.handleGoToResultsScreen(navigate), 2500)
    }

    return () => clearInterval(timerId)
  }, [min, sec])


  return (
    <div className="info_block">
      <p>Question: 1 out of 5</p>
      {over ? (
        <div ref={ref} style={{ color: 'red', fontSize: '24px' }}>Time&lsquo;s up!</div>
      ) : (
        <span>Timer: {`${min.toString()}:${sec.toString().padStart(2, '0')}`}</span>
      )}
    </div>
  )
}
