import React from 'react'
import SpaceOption from './SpaceOption'

export default function DropDownSpaceOptions(props) {
    console.log(props.spaces)
  return (
    <div >
        <label htmlFor="space">Choose an Space:</label>

<select className="ml-2" name="space" id="space">
{props.spaces.map(({id,name,category})=>(

    <option key={id} value={id}>{name}</option>
    
    ))}
    {/* <SpaceOption key={id} id={id} name={name}/> */}
  
</select>
         
      
    </div>
  )
}
