import React from 'react';

import Timer from './Timer';

function Working() {
  return (
    <div id='working'>
      <h1>Working</h1>
      <div className='timer-container'>
        <Timer />
      </div>
    </div>
  )
}

export default Working;