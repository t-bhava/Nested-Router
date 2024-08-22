import React, { useContext } from 'react'
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ThemeContext } from '../Context/ThemeContext';


const Contact = () => {
  const{ccolor,color}=useContext(ThemeContext)
  return (
    <div>
        <div id="contact" style={{backgroundColor:ccolor}}>
          <table style={{color:color}}>
            <tr> 
              <td><BsTelephoneFill /> </td> <td>  </td> <td>4567893456</td>
            </tr>
            <tr>
              <td><FaLocationDot /></td> <td>  </td> <td>34567fgh</td>
            </tr>
            <tr>
              <td><FaYoutube /></td> <td>  </td> <td>34567fgh</td>
            </tr>
            <tr>
              <td><FaLinkedin /></td> <td>  </td> <td>34567fgh</td>
            </tr>
          </table>
          
          
        
          
            
        </div>
        
    </div>
  )
}

export default Contact