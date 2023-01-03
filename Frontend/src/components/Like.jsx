import React,{useState,useContext} from 'react'
import {BiLike,BiDislike} from 'react-icons/bi'
import axios from 'axios'
import AuthContext from '../context/AuthContext'

const Like = (props) => {
  const [likes, setlikes] = useState(props.likes)
  const {user,authTokens} = useContext(AuthContext)
  const handleClick = () => {
    axios.interceptors.request.use(
      config => {
        config.headers.authorization = 'Bearer ' + authTokens.access;
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    )
    axios.post('http://127.0.0.1:8000/posts/like-post/', {
      post:props.post['id'],
      user:user.username,
    })
      .then(response => setlikes(response['data']['likes']))
      .catch(error => console.log(error));
  }
  return (
    <>
    <small className="ml-4 mt-1 mb-2 "><b>{likes}</b></small> 
   
    <BiLike  onClick={handleClick} className='text-3xl ml-2 mr-4 mt-1 hover:text-red-900'/>
   
    </>
    )
  }
  
  export default Like


