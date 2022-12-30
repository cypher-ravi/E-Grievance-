import React, { useEffect } from 'react'
import Qurabox from './Qurabox'
import Post from './Post'
import axios from'axios'
import { useState,useContext } from 'react'
import AuthContext from '../context/AuthContext'


const apiURL = 'http://127.0.0.1:8000';

const QuestionFeed = () => {
  
  const [posts,setPosts] = useState([]);
  let {authTokens} = useContext(AuthContext)

  axios.interceptors.request.use(
    config => {
      config.headers.authorization = 'Bearer ' + authTokens.access;
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  )
  useEffect(()=>{
    // let token = String(authTokens.access);
    
    axios
    .get(`${apiURL}/posts/list-post/`)
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

export default QuestionFeed
