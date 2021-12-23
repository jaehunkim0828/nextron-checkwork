import React, { useState } from 'react';

import Button from '../atoms/Button';
import Input from '../atoms/Input';

function TimeCheck() {
  const [listV, setListV] = useState('');
  const [list, setList] = useState<any[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setListV(value);
  }
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setListV('');
    setList([...list, listV]);
  }

  const inputStyle = { flex: '1'};
  const buttonStyle= {margin: '0 0 0 0.5rem', width: '3rem'};

  return (
    <div id='time-check'>
      <div className='list'>
        {list.map(todo => (
          <button className='item'>
            <div>{todo}</div>
            <div>Time</div>
          </button>
        ))}
      </div>
      <form className='button-container' onSubmit={onSubmit}>
        <Input value={listV} onChange={onChange} placeholder='할일을 적어주세요...' style={inputStyle}/>
        <Button style={buttonStyle} name={'추가'} type='submit' />
      </form>
    </div>
  )
}

export default TimeCheck;