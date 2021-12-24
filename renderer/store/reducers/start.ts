import { START_SUCESS, STOP_SUCESS} from '../actions/actionTypes';
import { StartT, ActionStart } from '../types/state';

const initialState: StartT = { bool: true };

export default (state = initialState, action: ActionStart) => {
  switch (action.type) {
    case STOP_SUCESS:
      return { bool: false };
    case START_SUCESS:
      return { bool: true };
    default:
      return state;
  }
}
