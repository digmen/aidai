import './App.css'
import heart from './assets/heart.svg'
import { useState, useEffect } from 'react'

function App() {
  const [isPulsing, setIsPulsing] = useState(false)
  const [timer, setTimer] = useState(90)
  const [showHeart, setShowHeart] = useState(true)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer < 100) {
          return prevTimer + 1
        } else {
          clearInterval(interval)
          setIsPulsing(true)
          return prevTimer
        }
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isPulsing) {
      const timeout = setTimeout(() => {
        setShowHeart(false)
        setShowText(true)
      }, 5000)
      return () => clearTimeout(timeout)
    }
  }, [isPulsing])

  return (
    <>
      <div className='container'>
        {timer < 100 ? (
          <div className='timerContainer'>
            <div className='timer'>{timer}%</div>
          </div>
        ) : null}
        {isPulsing && showHeart && (
          <div className='pulseContainer'>
            <img className='pulse' src={heart} alt="heart" />
          </div>
        )}
        {showText && (
          <div className='textContainer'>
            <div className='slides slide1'>
              <div className='text'>Я люблю тебя</div>
              <svg className='heartSvg' width="100px" height="100px" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="transparent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <animate attributeName="fill" values="red;orange;yellow;green;blue;purple;red" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="transform" attributeType="XML" type="scale" values="1;1.5;1" begin="0s" dur="1s" repeatCount="indefinite" />
                </path>
              </svg>
              <div className='arrow' >↓</div>
            </div>
            <div className='slides slide2'>
              <div className='text2'>Точно люблю)))</div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App
