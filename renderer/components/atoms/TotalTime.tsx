import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/reducers/index';


function TotalTime() {
  const { bool } = useSelector((state: RootState) => state.start);
  const [our, setour] = useState(0);
  const [min, setmin] = useState(0);
  const [sec, setsec] = useState(0);
  
  const getTotal = () => {
    sessionStorage.setItem('currentOur', '0');
    sessionStorage.setItem('currentMin', '0');
    sessionStorage.setItem('currentSec', '0');
    const ourC = +sessionStorage.getItem('currentOur');
    const minC = +sessionStorage.getItem('currentMin');
    const secC = +sessionStorage.getItem('currentSec');
    const list = sessionStorage.getItem('lists');
    const arr: string[] = JSON.parse(list);
    let localOur: number = 0;
    let localMin: number = 0;
    let localSec: number = 0;
    for (let i = 0; i < arr.length; i += 1) {
      const itemTime = JSON.parse(sessionStorage.getItem(arr[i]));
      let ourS = itemTime.our * 1 + ourC;
      let minS = itemTime.min * 1 + minC;
      let secS = itemTime.sec * 1 + secC;
      localOur += ourS;
      localMin += minS;
      localSec += secS;
    }
    setour(localOur);
    setmin(localMin);
    setsec(localSec);
    sessionStorage.setItem('currentOur', localOur + '');
    sessionStorage.setItem('currentMin', localMin + '');
    sessionStorage.setItem('currentSec', localSec + '');
  };

  const getCurrent = () => {
    const ourC = +sessionStorage.getItem('currentOur');
    const minC = +sessionStorage.getItem('currentMin');
    const secC = +sessionStorage.getItem('currentSec');
    setour(ourC);
    setmin(minC);
    setsec(secC);
  }

  useEffect(() => {
    if (sec > 59) {
      const updateMin = min + 1;
      const updateSec = sec - 60;
      setmin(updateMin);
      setsec(updateSec);
    }
    if (min > 59) {
      const updateMin = min - 60;
      const updateOur = our + 1;
      setour(updateOur);
      setmin(updateMin);
    }
  }, [sec])

  useEffect(() => {
    getCurrent();
    if (bool === false) {
      getTotal();
    }

    return () => {
      setour(0);
      setmin(0);
      setsec(0);
    }
  }, [bool])

  return (
    <div className='total-time'>{
      `${our} : ${min < 9 ? '0' + +min : min} : ${sec < 9 ? '0' + +sec : sec}`
      }</div>
  )
};

export default TotalTime;