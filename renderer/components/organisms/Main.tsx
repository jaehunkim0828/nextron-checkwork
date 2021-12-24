import React from 'react';

import Nav from '../molecules/Nav';
import Note from '../molecules/Note';
import Work from '../molecules/Work';
import Working from '../molecules/Working';

function Main() {
  return (
    <div id='main-container'>
      <Nav />
      <div className='content'>
        <div className='part1'>
          <Work />
          <Working />
        </div>
        <Note />
      </div>
    </div>
  )
}

export default Main;