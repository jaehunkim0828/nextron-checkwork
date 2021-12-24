import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/reducers/index';
import { startAct, stopAct } from '../../store/actions/start';
import Button from '../atoms/Button';
import { TimerT } from '../../types';
import { changeItem } from '../../store/actions/currentItem';

function Timer({current}: { current: string }) {
  const dispatch = useDispatch();
  
  const { time } = useSelector((state: RootState) => state.currentItem);
  const { bool } = useSelector((state: RootState) => state.start);

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
    dispatch(startAct());
  }


  const stop = () => {
    let time = clearInterval(timer);
    setTimer(time);
    const ourS = our + '';
    const minS = min + '';
    const secS = sec + '';
    sessionStorage.setItem(current, JSON.stringify({ our: ourS, min: minS, sec: secS }));
    dispatch(stopAct());
    // dispatch(changeItem(current, [our, min, sec]));
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

  useEffect(() => {
    if (isStart === 'Stop') {
      //멈춰!만 해야함
      let time = clearInterval(timer);
      setTimer(time);
      //refresh
      dispatch(stopAct());
    }
    //시간을 보여줌
    setOur(time[0]);
    setMin(time[1]);
    setSec(time[2]);

    return () => {
      setIsStart('Start');
      // 저장하는거 문제있음
    }

  }, [current]);


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