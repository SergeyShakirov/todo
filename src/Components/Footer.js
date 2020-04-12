import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {DEL_ALL, DEL_MARK} from '../redux/Types'

export default function Footer() {
  const Line = useSelector(state => state.counters)
  const dispatch = useDispatch();
  return( (Line.length !== 0 && Line.findIndex(name => name.mark === true) !== -1) ?
    <div>
      <a href ="/#" onClick={() => dispatch({type: DEL_ALL})} className="card-link">Очистить всё</a>
      <a href="/#" onClick={() => dispatch({type: DEL_MARK})} className="card-link">Очистить выполненые</a>
    </div> : (Line.length !== 0) ?
    <div>
      <a href ="/#" onClick={() => dispatch({type: DEL_ALL})} className="card-link">Очистить всё</a>
    </div> : null
  )
}
