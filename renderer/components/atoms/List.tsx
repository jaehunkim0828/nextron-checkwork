import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/reducers/index';
import { ListT } from '../../types';
import { changeItem } from '../../store/actions/currentItem';


function List({ list, setList }: ListT) {
  const { bool } = useSelector((state: RootState) => state.start);

  const [rerender, setRerender] = useState(true);
  const dispatch = useDispatch();

  const showStopwatch = (todo: string, ourS: number, minS: number, secS: number) => {
    //ask having a list name
    dispatch(changeItem(todo, [ourS, minS, secS]));
  };

  const deleteList = (todo: string) => {
    //remove
    const newList = [];
    for (let i = 0; i < list.length; i += 1) {
      if (list[i] === todo) {

      } else {
        newList.push(list[i]);
      }
    }
    setList(newList);
    sessionStorage.removeItem(todo);
    return;
  }
  useEffect(() => {
    if (!bool) 
    setRerender(false);
    setRerender(true);
  }, [bool])

  useEffect(() => {
    setRerender(true);
    console.log('hello');
    sessionStorage.setItem('lists', JSON.stringify(list));
    if (list.length <= 0) {
      setRerender(false);
    }
  }, [list])


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
            onDoubleClick={() => deleteList(todo)}
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