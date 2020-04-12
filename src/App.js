import React from 'react'
import AddTodo from './Components/AddTodo'
import ListTodo from './Components/ListTodo'
import Footer from './Components/Footer'
import Store from './redux/store'
import {Provider} from 'react-redux'

const App = () => {

  return(
    <Provider store={Store}>
      <div className="App">
        <div className ="container">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Список задач</h4>
              <AddTodo />
              <ListTodo />
              <hr/>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Provider>
    )
  }

export default App;
