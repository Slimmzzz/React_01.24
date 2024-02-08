import { useEffect, useState } from 'react'

export default function QuizTimerAndCurrentQuestion({ minutes = 1 }) {
  const [over, setOver] = useState(false)
  const [[min, sec], setTime] = useState([minutes, 0])

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
        <div style={{ color: 'red', fontSize: '24px' }}>Time&lsquo;s up!</div>
      ) : (
        <span>Timer: {`${min.toString()}:${sec.toString().padStart(2, '0')}`}</span>
      )}
    </div>
  )
}
