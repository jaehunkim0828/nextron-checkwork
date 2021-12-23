import Button from '../atoms/Button';
import React, { useState, useEffect } from 'react';

import { TimerT } from '../../types';

function Timer() {
  const [timer, setTimer] = useState(undefined);
  const [isStart, setIsStart] = useState<TimerT>('Start');
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [our, setOur] = useState(0);
  const process = (item: number) => item <  10 ? '0' + item.toString() : item.toString();

  const start = () => {
    let time = setInterval(() => {
      setSec(prevSec => prevSec + 1);
    }, 1000);
    setTimer(time);
  }

  const stop = () => {
    let time = clearInterval(timer);
    setTimer(time);
  }

  useEffect(() =>{
    if (sec > 59) {
      setSec(0);
      setMin(prevMin => prevMin + 1);
    }
    
  }, [sec]);

  useEffect(() =>{
    if (min > 59) {
      setMin(0);
      setOur(prevOur => prevOur + 1);
    }
  }, [min]);


  const buttonStyle = { width: '6rem', height: '3rem', fontSize: '1.5rem'};


  return (
    <form className='timer' onSubmit={(e) => {
      e.preventDefault();
      if (isStart === 'Start') {
        start();
        setIsStart('Stop');
      } else {
        stop();
        setIsStart('Start');
      }
    }}>
      <div className='time'>{`${process(our)} : ${process(min)} : ${process(sec)}`}</div>
      <Button style ={buttonStyle} type='submit' name={isStart} />
    </form>
  )
}

export default Timer;