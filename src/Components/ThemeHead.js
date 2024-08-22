import React, { useState } from 'react'
import Navigation from './Navigation';
import { ThemeContext } from "../Context/ThemeContext";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ThemeBody from "./ThemeBody"
import Contact from './Contact';
import Layout from './Layout';


const ThemeHead = () => {
  const [bcolor,setBcolor]=useState("lightgreen");
  const [color,setColor]=useState("black")
  const [count,setCount]=useState(1)
  const[ccolor,setCcolor]=useState("green")

  function fun(){
    if(count==0){
    setBcolor("lightgreen")
    setColor("black")
    setCcolor("green")
    setCount(count+1)
    }
    else{
      setBcolor("lightblue")
      setColor("white")
      setCcolor("lightpink")
      setCount(count-1)
      
    }
  
  }
  return (
    <div>
      <ThemeContext.Provider value={{fun,bcolor,color,ccolor}}>
       <BrowserRouter>
           <Routes>
              <Route path="/" element={<Layout/>}>
               <Route path="/" element={<ThemeBody/>}/> 
               <Route path="/contact" element={<Contact/>}/>
              </Route>
           </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
      
    </div>
  )
}

export default ThemeHead