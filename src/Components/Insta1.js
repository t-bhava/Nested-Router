import React,{useState} from 'react'
import './Insta1.css'
const Insta1 = () => {
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
    <>
    <nav id="NAV">
      <ul>
        <li>img</li>
      </ul>
      <ul>
        <li>Home</li>
        <li>Feed</li>
      </ul>
    </nav>
    <div className="one">
        <div class="box" style={{backgroundColor:bcolor}}>
            <h1> {text}</h1>
            <div className="img"></div>
            <div className="text">A flower cannot blossom without sunshine. </div> 
            <div className="two">   
            <button className="like" onClick={()=>fun()} style={{backgroundColor:color}} >Likes({count})</button>
            <button className="share" onClick={()=>fun2()}>share</button>
            <button className="dis" onClick={()=>fun1()}>Dislike</button>
            </div>
            <div  className="btn"><button onClick={()=>fun3()}>THANKS</button>
            </div>
            </div>
            </div>
            </>
  )
}

export default Insta1