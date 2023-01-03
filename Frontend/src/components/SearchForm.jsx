import React , {useContext,useState}from 'react'
import { CgSearch } from "react-icons/cg";
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'



export default function SearchForm() {

    const {authTokens} = useContext(AuthContext);
    const [posts, setPosts] = useState([])

    const navigate = useNavigate();
    const handleChange = (e) => {
        console.log(e.target.value)
        axios.interceptors.request.use(
            config => {
              config.headers.authorization = 'Bearer ' + authTokens.access;
              return config;
            },
            error => {
              return Promise.reject(error);

            }
          )
          axios
          .get(`http://127.0.0.1:8000/posts/list-post/?search=${e.target.value}`)
          .then((res)=>{
            console.log(res.data['results']);
            setPosts(res.data['results']);
          })
          .catch((e)=>{
            console.log(e)
          });
        if(e.target.value === ''){
            navigate('/');
        }
        else{
            navigate('/search-feed',{state: {posts :posts}})
        }

    }

  return (
    <>
    <div className="search_bar w-96">
        <input
          type="text"
          placeholder="enter search here"
          name="query"
          onChange={handleChange}
          className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
      </div>
      <button className=" hover:bg-red-700 bg-blue-900 p-2 rounded-3xl ml-1">
        <CgSearch className="text-white text-2xl content-center" />
      </button>
    </>

  )
}
