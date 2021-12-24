import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/reducers/index';
import Timer from './Timer';

function Working() {
  const { item } = useSelector((state: RootState) => state.currentItem);

  return (
    <div id='working'>
      {item === 'normal' ? <h2>Working</h2> : <h2>{item}</h2>}
      <div className='timer-container'>
        { item !== 'normal' ? <Timer current={item}/> : <div className='normal'>StopWatch</div>}
      </div>
    </div>
  )
}

export default Working;