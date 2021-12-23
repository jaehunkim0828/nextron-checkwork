import React from 'react';
import { ButtonT } from '../../types';



function Button({name, style, type}: ButtonT) {
  return (
    <button className='button' type={type} style={style}>{name}</button>
  )
}

export default Button;