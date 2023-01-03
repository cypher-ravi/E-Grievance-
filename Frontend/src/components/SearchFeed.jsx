import React from 'react'
import Post from './Post'
import { useState,useContext } from 'react'
import AuthContext from '../context/AuthContext'
import {useLocation } from 'react-router-dom'



const SearchFeed = () => {
    const {state} = useLocation();
    const {posts} = state; 
  
 
  return (

    <div className='feed basis-2/4 w-2/4 ml-24 flex flex-col'>
       {/* <Qurabox/> */}
       <div>
       
       {posts.map((post,index)=>(<Post key={index} post={post}/>))}
       </div>
      
    </div>
  )
}

export default SearchFeed
