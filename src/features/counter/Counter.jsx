import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectCount, reset } from './counterSlice';
import { useState } from 'react'
// selectCount is coming from countersplice and its the initialstate

function Counter() {
    const [incrementAmount, setIncrementAmount] = useState(1)
    // define the count 
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
// creatingthe function for the increments 
    function handleIncrementAmount(e) {
      setIncrementAmount(Number(e.target.value))
    }
  return (
    <div>
        {count}
        <br />
        <input type ="number" min='1' step='1' value={incrementAmount} onChange={handleIncrementAmount}/>
        <br />
        <br />
        <button onClick={()=> dispatch(increment(incrementAmount))}> + </button>
        <button onClick={()=> dispatch(decrement(incrementAmount))}> - </button>
        <br />
        <br />
        <button onClick={()=> dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter