import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const ThemeFoot = () => {
  const{bcolor,color}=useContext(ThemeContext)
  return (
    <div>
     <div id="foot" style={{backgroundColor:bcolor,color:color}}>
      <p>
       copyrights @ 2024 Connect private limited|Privacy policy|Feedback
      </p>
     </div>


    </div>
  )
}

export default ThemeFoot