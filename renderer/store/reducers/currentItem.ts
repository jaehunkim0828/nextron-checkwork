import { RESET_ITEM, CHANGE_ITEM} from '../actions/actionTypes';
import { CurrentItem, ActionProps } from '../types/state';

const initialState: CurrentItem = { item: 'normal', time: [] };

export default (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case CHANGE_ITEM:
      return { item: action.payload, time: action.time };
    case RESET_ITEM:
      return { item: action.payload, time: [] };
    default:
      return state;
  }
}
