const redux = require('redux')

const initialState = {
  Counter: 0
}
//Reducer
const reducer = (state = initialState, action) => {
  return state
}

//Store
const store = redux.createStore(reducer)
console.log(store.getState())

//Actions
