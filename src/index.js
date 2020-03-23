import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provader} from 'react-redux'
import rootReducer from './redux/rootReducer'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provader store={store}>
    <App />
  </Provader>,
  document.getElementById('root')
);

serviceWorker.unregister();
