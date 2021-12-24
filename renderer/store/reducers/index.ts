import { combineReducers } from "redux";
import currentItem from "./currentItem";
import start from './start';

const rootReducer = combineReducers({
  currentItem,
  start,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;