// import React, { useEffect,useState } from 'react'

// const Useeffect = () => {
//     const[inp,setInp]=useState(0)
//     useEffect(()=>{
//         setTimeout(()=>{
//             setInp(inp+1);
//         },1000

//         )
//     }

//     )
//   return (
//     <div>
//         <p>
//             {inp}
//         </p>
//     </div>
//   )
// }

// export default Useeffect
import React,{useState} from 'react'

const Useeffect = () => {
    const[count,setCount]=useState(0)
    const increement=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <p>
            {count}
        </p>
        <button onClick={increement}>CLICK</button>
    </div>
  )
}

export default Useeffect