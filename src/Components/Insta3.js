import React,{useState} from 'react'
import './Insta3.css'

const Insta3 = () => {
    const[color,setColor]=useState()
    const[count,setCount]=useState(0)
    const[bcolor,setBcolor]=useState()
    const[text,setText]=useState("Welcome to my Instagram !")
    function fun(){
        setColor("red")
        setCount(count+1)
        
    }
 function fun1(){
    if(count!=0)
    setCount(count-1)
    setColor("white")
}
function fun2(){
  setBcolor("aqua")

}
function fun3(){
  setText("Thank you for posting !")

}
  return (
    <div className="one">
        <div className="box" style={{backgroundColor:bcolor}}>
            <h1> {text}</h1>
            <div className="img2"></div>
            <div className="text">BEC is the Best,Come and build your dreams here </div> 
            <div className="two">   
            <button className="like" onClick={()=>fun()} style={{backgroundColor:color}} >Likes({count})</button>
            <button className="share" onClick={()=>fun2()}>share</button>
            <button className="dis" onClick={()=>fun1()}>Dislike</button>
            </div>
            <div  className="btn"><button onClick={()=>fun3()}>THANKS</button>
            </div>
            </div>
            </div>
  )
}

export default Insta3