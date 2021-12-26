import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/reducers/index';
import { ListT } from '../../types';
import { changeItem } from '../../store/actions/currentItem';


function List({ list }: ListT) {
  const { bool } = useSelector((state: RootState) => state.start);

  const [rerender, setRerender] = useState(true);
  const dispatch = useDispatch();
  const showStopwatch = (todo: string, ourS: number, minS: number, secS: number) => {
    //ask having a list name
    dispatch(changeItem(todo, [ourS, minS, secS]));
  };

  useEffect(() => {
    if (!bool) 
    setRerender(false);
    setRerender(true);
  }, [bool])

  return (
    <>
      {rerender ? list.map((todo: string) => {
          if (!sessionStorage.getItem(todo)) {
            sessionStorage.setItem(todo, JSON.stringify({ our: '0', min: '0', sec: '0'}));
          }
          const item = JSON.parse(sessionStorage.getItem(todo));
          let { our, min, sec }: {our: any, min: any, sec: any } = item;
          const ourN = our *= 1;
          const minN = min *= 1;
          const secN = sec *= 1;

          const process = (item: number) => item <  10 ? '0' + item.toString() : item.toString();

          return <button 
            className='item'
            onClick={() => showStopwatch(todo,ourN, minN, secN)}
          >
            <div>{todo}</div>
            <div>{`${process(ourN)} : ${process(minN)} : ${process(secN)}`}</div>
          </button>
        })
          :
        <></>
      }
    </>
  )
};

export default List;