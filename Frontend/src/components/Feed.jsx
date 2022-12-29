import React, { useEffect } from 'react'
import Qurabox from './Qurabox'
import Post from './Post'
import axios from'axios'
import { useState,useContext } from 'react'
import AuthContext from '../context/AuthContext'



const Feed = () => {
  let {authTokens} = useContext(AuthContext)
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    // let token = String(authTokens.access);
    const config = {
      headers : {'Content-Type':'application/json'},
    }
    axios
    .get("http://127.0.0.1:8000/posts/list-post/",config)
    .then((res)=>{
      console.log(res.data['results']);
      setPosts(res.data['results']);
    })
    .catch((e)=>{
      console.log(e)
    });
  },[])
  return (
    <div className='feed basis-3/4 flex flex-col'>
       <Qurabox/>
       <div>
       
       {posts.map((post,index)=>(<Post key={index} post={post}/>))}
       </div>
      
    </div>
  )
}

export default Feed
