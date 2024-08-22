import React, { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'
//import ButtonComponent from './ButtonComponent'



const Counter = () => {
    const {count}=useContext(CounterContext)
  return (
    <div>
        <p>{count}</p>
        {/* <ButtonComponent/> */}
    </div>
    
  )
}

export default Counter