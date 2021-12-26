import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/reducers/index';


function TotalTime() {
  const { bool } = useSelector((state: RootState) => state.start);
  const [our, setour] = useState(0);
  const [min, setmin] = useState(0);
  const [sec, setsec] = useState(0);
  
  const getTotal = () => {
    const list = sessionStorage.getItem('lists');
    const arr: string[] = JSON.parse(list);
    let localOur: number = 0;
    let localMin: number = 0;
    let localSec: number = 0;
    for (let i = 0; i < arr.length; i += 1) {
      const itemTime = JSON.parse(sessionStorage.getItem(arr[i]));
      let ourS = itemTime.our * 1 + our;
      let minS = itemTime.min * 1 + min;
      let secS = itemTime.sec * 1 + sec;
      localOur += ourS;
      localMin += minS;
      localSec += secS;
    }
    console.log(localOur,localMin , localSec)
    setour(localOur);
    setmin(localMin);
    setsec(localSec);
  };

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
    if (bool === false) {
      getTotal();
    }
  }, [bool])

  return (
    <div>{`${our} : ${min} : ${sec}`}</div>
  )
};

export default TotalTime;