import React from 'react'
import Qurabox from './Qurabox'
import Post from './Post'

const Feed = () => {
  return (
    <div className='feed basis-3/4 flex flex-col'>
       <Qurabox/>
       <div className="">
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       </div>
      
    </div>
  )
}

export default Feed
