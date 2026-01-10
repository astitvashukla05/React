import React from 'react'
import { useCounterStore } from '../store/counterStore'
function Counter() {
    const {count,inc,dec,reset}=useCounterStore()
  return (
    <>
    <div>Counter:{count}</div>
    <button onClick={inc}>Increase Me!</button>
    <button onClick={dec}>Decrease Me!</button>
    <button onClick={reset}>Reset  Me!</button>
    </>
  )
}

export default Counter