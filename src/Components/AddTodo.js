import React from 'react';
import { useDispatch} from 'react-redux';
import {ADD_LINE} from '../redux/Types'

function AddTodo(){
  const dispatch = useDispatch();

  const AddLine = () => {
      const input = document.getElementById("1").value
      if(input !== '')
      {dispatch({type: ADD_LINE, payload: input})
      document.getElementById("1").value = ""}


  }

  return (
    <div className="input-group mb-3">
      <input
        id="1"
        type="text"
        className="form-control"
        placeholder="Что делать?"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        onChange={(event) => event.target.addEventListener('keyup', e => {if(e.keyCode === 13) return AddLine()})}/>
      <div className="input-group-append">
        <button className="btn btn-primary" type="button" id="button-addon2" onClick = {() => AddLine()}>Добавить</button>
      </div>
    </div>
  )
}

export default AddTodo;
