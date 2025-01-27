import './App.css'
import heart from './assets/heart.svg'
import { useState, useEffect } from 'react'

function App() {
  const [isPulsing, setIsPulsing] = useState(false)
  const [timer, setTimer] = useState(0)
  console.log(timer)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer < 100) {
          return prevTimer + 1
        } else {
          clearInterval(interval)
          setIsPulsing(true) // Показываем сердце сразу после достижения 100
          return prevTimer
        }
      })
    }, 1000) // Увеличиваем интервал до 1000 мс, чтобы замедлить счетчик

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className='container'>
        {timer < 100 ? (
          <div className='timer'>{timer}%</div>
        ) : null}
        {isPulsing && (
          <img className='heart pulse' src={heart} alt="heart" />
        )}
      </div>
    </>
  )
}

export default App
