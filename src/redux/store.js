import rootReducer from './rootReducer'
import {createStore} from 'redux'

const initialState = {
  counters: []
}

const Store = createStore(
  rootReducer,
  initialState
)

export default Store
