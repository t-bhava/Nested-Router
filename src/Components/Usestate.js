import React ,{useState}from 'react'

const Usestate = () => {
    const [count,setCount]=useState(0)
    function increement(data){
        setCount(count+data)//with parameter
    }
    const [color,setColor]=useState()
    function fun(){
        setColor("green")

    }
    const[change,setChange]=useState('text')
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>increement(5)}>Hello</button>{/*{increement} for without parameter */}
        <p style={{color:color}}>
        hii
      </p>
      <button onClick={fun}>Hello</button><br />
      <input type="text"  value={change} onChange={(e)=>setChange(e.target.value)} />
      <p>{change}</p>
    </div>

  )
}

export default Usestate