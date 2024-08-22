import React from 'react'

const Property = (props) => {  //By using the common property name instead of this we can use directly the keys name {Name,Regno,Dept,Year}
//const Property=({Name,Regno,Dept,Year})=>{
    //return(
    //<p>{Name}</p>
    //)
    //}
  return (
    <div>
        <p>NAME : {props.Name}</p>
        <p>REGISTER NUMBER : {props.Regno}</p>
        <p>DEPARTMENT : {props.Dept}</p>
        <p>YEAR : {props.Year}</p>
    </div>
  )
}

export default Property