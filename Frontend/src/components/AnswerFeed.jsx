import React, { useEffect } from 'react'
import AnswerPost from './AnswerPost'
import axios from'axios'
import { useState,useContext } from 'react'
import AuthContext from '../context/AuthContext'
import {useLocation } from 'react-router-dom'


const apiURL = 'http://127.0.0.1:8000';

const AnswerFeed = () => {
  
  const [posts,setPosts] = useState([]);
  let {authTokens} = useContext(AuthContext)
  const {state} = useLocation();
  const { question } = state; 

 
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
    .get(`${apiURL}/posts/list-all-answers/${question}/`)
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
       {posts.map((post,index)=>(<AnswerPost key={index} post={post}/>))}
    </div>
  )
}

export default AnswerFeed
