import React from 'react';


function Nav() {
  const getDate = () => {
    const today = new Date();
    return today.toLocaleDateString();
  }

  const getDay = () => {
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    return week[new Date().getDay()];
  }

  return (
    <nav id='nav'>
      <div>{getDate()}</div>
      <div>{getDay()}</div>
    </nav>
  )
}

export default Nav;