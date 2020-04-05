import {ADD_LINE} from './types'

const initialState = {
  default: {name: '', mark: false}
}

export default function rootReducer(state = initialState, action){
  switch (action.type) {
    case ADD_LINE:
      return state
    default:
      return state
  }
}
