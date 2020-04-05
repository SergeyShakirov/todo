import rootReducer from './redux/rootReducer'
import React, {useState} from 'react'
import AddTodo from './Components/AddTodo'
import ListTodo from './Components/ListTodo'
import Footer from './Components/Footer'

const App = () => {

  return(
    <div className="App">
      <div class ="container">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Список задач</h4>
            <AddTodo />
            <ListTodo />
            <hr/>
            <Footer />
          </div>
        </div>
      </div>
    </div>
    )
  }

export default App;
