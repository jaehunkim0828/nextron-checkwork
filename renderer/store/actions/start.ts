import {START_SUCESS, STOP_SUCESS } from './actionTypes';

export const startAct = () => {
  return {
    type: START_SUCESS,
  };
};

export const stopAct = () => {
  return {
    type: STOP_SUCESS,
  }
}