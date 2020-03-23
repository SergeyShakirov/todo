import React from 'react';
import './App.css';

function App() {

  function NewClick() {
    console.log(1);
  }

  return (
    <div className="App">
      <a name="newList" href="#top" onClick={NewClick}>Новый список</a><br/>
    </div>
  )
}

export default App;
