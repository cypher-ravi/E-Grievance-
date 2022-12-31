import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SpaceOption(props) {
    let navigate = useNavigate()
    const navigateToSpaceSolutions=()=>{
      navigate('/space-solutions',{state: {value : props.id,navigateToSpace:true}})
      console.log("space id is coming "+props.id)
  
    }
  return (
    <button onClick={navigateToSpaceSolutions} > <div  className="sidebaroption">
    <img className='image' src="" alt="" />
    <p className='paragraph'>{props.name}</p>
     </div></button>
  )
}
