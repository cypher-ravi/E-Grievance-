import React, { useState } from 'react'
import {AiFillEdit, AiOutlineHome, AiOutlineUsergroupAdd} from 'react-icons/ai'
import {SlUserFollowing} from 'react-icons/sl'
import {IoMdNotificationsOutline} from 'react-icons/io'
// import {CiSearch} from 'react-icons/ci'
import {RxAvatar} from 'react-icons/rx'
import {MdOutlineLanguage,MdKeyboardArrowDown} from 'react-icons/md'

import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
import {IoMdClose} from 'react-icons/io'
import {BsPeopleFill} from 'react-icons/bs'

const Navbar = () => {

  const [isModalOpen,setIsModalOpen] = useState(false);
  const Close = (<IoMdClose/>)

  return (
    <div className='h-16 qheader flex justify-center items-center p-1 bg-white w-full sticky z-auto top-0 shadow-sm shadow-slate-400' >
        <div className='header_logo h-8 mr-5'>
            <h1 className='text-3xl font-extrabold text-red-900 items-center pb-4'>Quara</h1>
        </div>
        <div className='q_header_icons flex mr-5'>
            <div className='qheader_icon'>
            <AiOutlineHome/>
            </div>
            <div className='qheader_icon'>
            <SlUserFollowing/>
            </div>
            <div className='qheader_icon'>
            <AiFillEdit/> 
            </div>
            <div className='qheader_icon'>
            <AiOutlineUsergroupAdd/>
            </div>
            <div className='qheader_icon'>
            <IoMdNotificationsOutline/>
            </div> 
        </div>
        {/* <div className="q_header_input flex  p-5 rounded-lg border-black border-2">
        <CiSearch/>
        <input className="bg-transparent outline-none border-none " type="text" placeholder='enter the search' />
        </div> */}
        <div className="remainimg flex items-center ml-6 ">
            <div className="avatar qheader_icon">
            <RxAvatar/>
            </div>
            <MdOutlineLanguage className="text-3xl text-slate-400 hover:text-red-900"/>
            <button onClick={()=>setIsModalOpen(true)} className='ml-6 bg-red-900 cursor-pointer rounded-lg border-2 rounder-md w-40 text-white hover:bg-red-700'>Add Complaint</button>
            <Modal open={isModalOpen} closeIcon={Close} onClose={()=>setIsModalOpen(false)} closeOnEsc center closeOnOverlayClick={false}>
              <div className="modal_title flex items-center mb-1 border border-slate-400">
                <h1 className='text-slate-300 text-xl cursor-pointer font-medium mr-8 hover:text-red-600'>Add Question</h1>
                <h1 className='text-slate-300 text-xl cursor-pointer font-medium mr-8 hover:text-red-600'>Share Link</h1>
              </div>
              <div className="modal_info flex items-center mt-8">
                <RxAvatar className='avatar'/>
                <div className="modal_scope flex items-center text-slate-400 p-1 ml-3 bg-white rounded-3xl cursor-pointer">
                  <BsPeopleFill/>
                  <p className='ml-3 text-sm text-slate-400'>Public</p>
                  <MdKeyboardArrowDown/>
                </div>
              </div>
              <div className="modal_field flex flex-col mt-8 flex-1">
                <input className="text flex-1 ml-1 rounded-none outline-0" type="text" placeholder='Start your Question with how and etc.' />
                <div className='flex flex-col field_link  text-slate-400 items-center mt-3" '>
                  <input className='flex-1 ml-1 rounded-none outline-0 m-1 border border-slate-300 p-3' type="text" placeholder='optional:include a link that give the context' />
                </div>
              </div>
              <div className="modal_buttons flex flex-col-reverse mt-3 items-center">
                <button className="cancel mt-3 border-0 outline-0 text-slate-400 font-medium p-3 rounded-3xl  cursor-pointer hover:bg-red-400" onClick={()=>setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="subbmit" className="add border-0 outline-0 mt-3 bg-black text-white font-bold p-3 cursor-pointer w-1/2 hover:bg-white hover:text-black" >
                  Add Question
                </button>
              </div>
            </Modal>
        </div>




      
    </div>
  )
}

export default Navbar