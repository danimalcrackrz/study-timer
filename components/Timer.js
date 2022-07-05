import React, { useEffect, useState } from "react"
import { BsFillArrowDownSquareFill } from "react-icons/bs"
import { BsFillArrowUpSquareFill } from "react-icons/bs"

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(60)

  let interval

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime((oldTime) => {
          const newTime = oldTime - 1
          if (newTime === 0) {
            setIsRunning(false)
          }
          return newTime
        })
      }, 1000)
      return () => {
        clearInterval(interval)
      }
    }
  }, [isRunning])

  const handleReset = () => {
    setTime(60)
    setIsRunning(false)
    clearInterval(interval)
  }

  return (
    <div className='timer'>
      <div className='timer-container'>
        {time}
        <div className='timer-adjustment'>
          <BsFillArrowUpSquareFill onClick={() => setTime(time + 1)} />
          <BsFillArrowDownSquareFill onClick={() => setTime(time - 1)} />
        </div>
      </div>
      <div className='timer-contents'>
        <button
          className={isRunning ? "timer-btn running" : "timer-btn"}
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "Pause Timer" : "Start Timer"}
        </button>
        <button className='timer-btn' onClick={handleReset}>
          Reset Timer
        </button>
      </div>
    </div>
  )
}

export default Timer
