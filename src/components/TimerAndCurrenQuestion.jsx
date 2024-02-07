import { useEffect, useState } from 'react'

export default function QuizTimerAndCurrentQuestion({ minutes = 1 }) {
  const [over, setOver] = useState(false)
  const [[m, s], setTime] = useState([minutes, 0])

  function tick() {
    if (over) return

    if (m === 0 && s === 0) {
      setOver(true)
    } else if (s === 0) {
      setTime([m - 1, 59])
    } else {
      setTime([m, s - 1])
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
        <div style={{ color: 'red', fontSize: '24px' }}>Time&lsquo;s up!</div>
      ) : (
        <span>Timer: {`${m.toString()}:${s.toString().padStart(2, '0')}`}</span>
      )}
    </div>
  )
}
