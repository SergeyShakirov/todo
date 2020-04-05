import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import addLine from '../redux/Actions'

export default function AddTodo({ value }) {

  // const dispatch = useDispatch()
  // const incrementCounter = useCallback(
  //   () => dispatch(addLine),
  //   [dispatch]
  // )



  return (
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Что делать?" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" id="button-addon2">Добавить</button>
      </div>
    </div>
  )

}
