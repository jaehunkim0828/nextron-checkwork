import {RESET_ITEM, CHANGE_ITEM} from './actionTypes';

export const changeItem = (item: string, time: number[]) => {
  return {
    type: CHANGE_ITEM,
    payload: item,
    time,
  };
};

export const resetItem = () => {
  return {
    type: RESET_ITEM,
    payload: 'normal',
  }
}