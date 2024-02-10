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
      setTime([min - 1, 59])
    } else {
      setTime([min, sec - 1])
    }
  }

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000)

    return () => clearInterval(timerId)
  })


  return (
    <div className="info_block">
      <p>Question: 1 out of 5</p>
      {over ? (
        <>
          <div ref={ref} style={{ color: 'red', fontSize: '24px' }}>Time&lsquo;s up!</div>
          {setTimeout(() => ROUTE_HELPERS.handleGoToResultsScreen(navigate), 0)}
        </>
      ) : (
        <span>Timer: {`${min.toString()}:${sec.toString().padStart(2, '0')}`}</span>
      )}
    </div>
  )
}
