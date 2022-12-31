import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Widgetoptions = () => {
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
    <div className='widget_contents p-4'>

      {/* <div className="widget_content flex rounded  border border-slate-300 hover:bg-slate-100 p-2 cursor-pointer">
        <img className="object-contain h-12 w-12 p-2" src="https://cdn-icons-gif.flaticon.com/6839/6839002.gif" alt="" />
        <div className="Widget_content_title">
        <h1 className='text-black font-extrabold'>Mobile app programer</h1>
        <p className=''>The best mobile app development company</p>
        </div>
      </div> */}
    </div>
  )
}

export default Widgetoptions
