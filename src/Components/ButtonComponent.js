import React, { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'
import Counter from './Counter'

const ButtonComponent = () => {
    const {increment,decrement}=useContext(CounterContext)
  return (
    <div>
        <button onClick={increment} >Increment</button>
        <button onClick={decrement}>Decrement</button>
        <Counter/>
    </div>
  )
}

export default ButtonComponent