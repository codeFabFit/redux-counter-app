import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectCount } from './counterSlice';
// selectCount is coming from countersplice and its the initialstate
function Counter() {


    // define the count 
    const count = useSelector(selectCount)
    const dispatch = useDispatch()

  return (
    <div>
        {count}
        <br />
        <br />
        <button onClick={()=> dispatch(increment())}> + </button>
        <button onClick={()=> dispatch(decrement())}> - </button>

    </div>
  )
}

export default Counter