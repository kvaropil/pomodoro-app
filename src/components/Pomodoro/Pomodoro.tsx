import React, { useState, useEffect } from 'react';

export function Pomodoro(): JSX.Element {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(25);
  const [displayMessage, setDisplayMessage] = useState<boolean>(false);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
    const interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          const currentMinutes = displayMessage ? 24 : 4;
          const currentSeconds = 59;

          setSeconds(currentSeconds);
          setMinutes(currentMinutes);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  return (
    <div className='pomodoro'>
      <div className='message'>
        {displayMessage && <div>Break time! New session starts in:</div>}
      </div>
      <div className='timer'>
        {timerMinutes}:{timerSeconds}
      </div>
    </div>
  );
}
