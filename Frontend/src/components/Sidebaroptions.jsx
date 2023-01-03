import React,{useState,useEffect} from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'


import axios from 'axios'
import SpaceOption from './SpaceOption'

const Sidebaroptions = () => {
    const [spaces,setSpaces] = useState([]);
   

    useEffect(()=>{
      axios
      .get("http://127.0.0.1:8000/posts/list-spaces/")
      .then((res)=>{
        console.log(res.data['results']);
        setSpaces(res.data['results']);
      })
      .catch((e)=>{
        console.log(e)
      });
    },[])
  return (
    <div className='sidebaroptions flex flex-col'>
        <div>
        {spaces.map(({id,name,category})=>(

<SpaceOption key={id} id={id} name={name}/>
       
        ))}
       
        </div>
       

        <div className="sidebaroption">
        <AiOutlinePlusCircle/>
            <p className="text">Discover Spaces</p>
        </div>
    
    </div>
  )
}

export default Sidebaroptions
