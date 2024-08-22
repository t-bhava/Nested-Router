import React, { useContext } from 'react'
import './Theme.css'
import { FcCdLogo } from "react-icons/fc";
import { ThemeContext } from "../Context/ThemeContext";
import ThemeBody from './ThemeBody';
import { Link } from 'react-router-dom';
import Contact from './Contact';

const Navigation = () => {
  const {fun,bcolor,color} = useContext(ThemeContext)
  return (
    <div>
      <div id="one" style={{backgroundColor:bcolor}}>
            <ul id="two"  style={{color:color}}>
            <li><FcCdLogo /></li>
            <li>SPARKS</li>
            <li className='four'><Link to='/' style={{color:color}}>Home</Link></li>
            <li className='four'><Link to='/contact' style={{color:color}}>Contact us</Link></li>
            <li><button onClick={fun}>Theme</button></li>
            </ul>
            
      </div>
    
      
    </div>
  )
}

export default Navigation