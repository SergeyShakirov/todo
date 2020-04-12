import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {DEL_LINE, MARK_LINE} from '../redux/Types'

export default function ListTodo() {
  const Line = useSelector(state => state.counters)
  const dispatch = useDispatch();

  return( Line.map(name => {
    return(
      <div id = {name.key}className="list-group">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
          type="button"
          className="list-group-item list-group-item-action"
          onClick={() => dispatch({type: MARK_LINE, payload: name.id})}>{name.mark === true ? <s>{name.lineName}</s> : name.lineName}
          </button>
          <button type="button" className="btn btn-danger" onClick={() => dispatch({type: DEL_LINE, payload: name.id})}>&#10006;</button>
        </div>
        <br/>
      </div>)}))}
