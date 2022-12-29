import React, { useState } from 'react'
import {AiFillEdit, AiOutlineHome, AiOutlineUsergroupAdd} from 'react-icons/ai'
import {SlUserFollowing} from 'react-icons/sl'
import {IoMdNotificationsOutline} from 'react-icons/io'

// import ReactSearchBox from "react-search-box";

// import {CiSearch} from 'react-icons/ci'
import {CgSearch} from 'react-icons/cg'

import {RxAvatar} from 'react-icons/rx'
import {MdOutlineLanguage,MdKeyboardArrowDown} from 'react-icons/md'

import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
import {IoMdClose} from 'react-icons/io'
import {BsPeopleFill} from 'react-icons/bs'

import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isModalOpen,setIsModalOpen] = useState(false);
  const [inputUrl,setInputUrl] = useState("");
  

  const Close = (<IoMdClose className='text-2xl font-bold'/>)

  return (
    <div className='h-16 qheader flex justify-center items-center p-1 bg-white w-full sticky z-auto top-0 shadow-sm shadow-slate-400' >
        <div className='header_logo h-8 mr-5'>
            <h1 className='text-3xl font-extrabold text-red-900 items-center pb-4'>EGrievance</h1>
        </div>
        <div className='q_header_icons flex mr-5'>

            <Link to="/">
            <div className='qheader_icon'>
            <AiOutlineHome className="hover:bg-slate-100 rounded-2xl"/>
            </div>
            </Link>


            <div className='qheader_icon'>
            <SlUserFollowing className="hover:bg-slate-100 rounded-2xl"/>
            </div>
            <div className='qheader_icon'>
            <AiFillEdit className="hover:bg-slate-100 rounded-2xl"/> 
            </div>
            <div className='qheader_icon'>
            <AiOutlineUsergroupAdd className="hover:bg-slate-100 rounded-2xl"/>
            </div>
            <div className='qheader_icon'>
            <IoMdNotificationsOutline className="hover:bg-slate-100 rounded-2xl"/>
            </div>

        </div>
             <div className="search_bar">
              <input type="text" placeholder='enter search here' className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
              </div> 
             <button className=' hover:bg-red-700 bg-red-900 p-2 rounded-3xl ml-1'><CgSearch className='text-white text-xl content-center'/></button>

              


        
      

        <div className="remainimg flex items-center ml-6 ">

             <Link to='/signup'> 
            <div className="avatar qheader_icon">
            <RxAvatar className="hover:bg-slate-100 rounded-2xl"/>
            
            </div>
            </Link>


            <MdOutlineLanguage className="text-3xl text-slate-400 hover:text-red-900 hover:bg-slate-100 rounded-2xl"/>
            <button onClick={()=>setIsModalOpen(true)} className='ml-6 bg-red-900 cursor-pointer rounded-lg border-2 rounder-md w-40 text-white hover:bg-red-700'>Add Complaint</button>
            <Modal open={isModalOpen} closeIcon={Close} onClose={()=>setIsModalOpen(false)} closeOnEsc center closeOnOverlayClick={false}>
              <div className="modal_title flex items-center mb-1 border-b-2 border-slate-400">
                <h1 className='text-slate-300 text-xl cursor-pointer font-medium mr-8 hover:text-red-600'>Add Question</h1>
                <h1 className='text-slate-300 text-xl cursor-pointer font-medium mr-8 hover:text-red-600'>Share Link</h1>
              </div>
              <div className="modal_info flex items-center mt-8">
                <RxAvatar className='avatar text-3xl'/>
                <div className="modal_scope flex items-center text-slate-400 p-1 ml-3 bg-white rounded-3xl cursor-pointer">
                  <BsPeopleFill className='text-3xl'/>
                  <p className='ml-3 text-lg text-slate-400'>Public</p>
                  <MdKeyboardArrowDown/>
                </div>
              </div>
              <div className="modal_field flex flex-col mt-8 flex-1">
                <input className="text flex-1 ml-1 rounded-none outline-0 border-b-2 border-slate-500" type="text" placeholder='Start your Question with how and etc.' />
                <div className='flex flex-col flex-1 pt-3'>
                  <input value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} className='flex-1 ml-1 rounded-none outline-1 outline-none outline-slate-600 p-2' type="text" placeholder='optional:include a link that give the context' />
                 {
                 inputUrl !== "" && <img className=' p-3 h-80 object-contain' src={inputUrl} alt="displayimage" />
                 }
                </div>
              </div>
              <div className="modal_buttons flex flex-col-reverse mt-3 items-center">
                <button className="cancel bg-slate-300 mt-3 border-0 outline-0 text-white font-medium p-3 w-1/3 rounded-2xl   cursor-pointer hover:bg-red-700 " onClick={()=>setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="subbmit" className="add border-0 outline-0 mt-3 bg-black text-white font-bold p-3 cursor-pointer w-1/2 rounded-2xl hover:bg-slate-400 hover:text-black" >
                  Add Question
                </button>
              </div>
            </Modal>
        </div>




      
    </div>
  )
}

export default Navbar
