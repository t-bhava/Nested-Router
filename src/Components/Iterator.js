import React,{useState} from 'react'

const Iterator = () => {
    const[task,setTask]=useState([])
    const[data,setData]=useState('Hi')
    function fun(){
        fun1(data)

    }
    function fun1(add){
        setTask([...task,add])
        console.log(task)

    }


  return (
    <div>
        <input type="text" value={data}  onChange={(e)=>setData(e.target.value)}/><br/>
        <ul>
            {

            
        task.map((val,index)=>(
            <li key={index}>
                {val}
            </li>
        ))
    }
        </ul>
        <button onClick={()=>fun()}>ADD</button>
    </div>
  )
}

export default Iterator