import React from 'react'
import { useContext } from 'react'
import { CountContext } from './App'

function ComponantB() {
  const countContext = useContext(CountContext)
  return (
    <div>
      <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.countDispatch("reset")}>reset</button>
    </div>
  )
}

export default ComponantB;
