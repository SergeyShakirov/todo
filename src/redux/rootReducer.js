import {ADD_LINE, DEL_LINE, MARK_LINE, DEL_ALL, DEL_MARK} from './Types'
import { v4 as uuidv4 } from 'uuid';

export default function rootReducer(state, action){
  switch (action.type) {
    case ADD_LINE:
      return {...state, counters: [...state.counters, {id: uuidv4(), mark: false, lineName: action.payload}]}
    case DEL_LINE:
      return {...state, counters: state.counters.filter(name => name.id !== action.payload)}
    case MARK_LINE:
      return {...state, counters: state.counters.map(name => (name.id === action.payload) ? {...name, mark: !name.mark}: name)}
    case DEL_ALL:
      return {...state, counters: state.counters = []}
    case DEL_MARK:
      return {...state, counters: state.counters.filter(name => name.mark !== true)}
    default:
      return state
  }
}
