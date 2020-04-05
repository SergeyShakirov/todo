import React from 'react'

export default function ListTodo({ value }) {
  return(
    <div class="list-group">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
        <button type="button" class="btn btn-danger">&#10006;</button>
      </div>
      <br/>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
        <button type="button" class="btn btn-danger">&#10006;</button>
      </div>
      <br/>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
        <button type="button" class="btn btn-danger">&#10006;</button>
      </div>
    </div>
  )
}
