import React, { useState,useContext } from "react";
import {
  AiFillEdit,
  AiOutlineHome,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { SlUserFollowing } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";



import { RxAvatar } from "react-icons/rx";
import { MdOutlineLanguage, MdKeyboardArrowDown } from "react-icons/md";

import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { IoMdClose } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import QuestionForm from "./QuestionForm";
import UserDropDown from "./UserDropDown";
import SearchForm from "./SearchForm";

const Navbar = () => {
  let {user,logoutUser} = useContext(AuthContext)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");

  const Close = <IoMdClose className="text-2xl font-bold" />;

  return (
    <div className="h-16 qheader flex justify-center items-center p-1 bg-white w-full sticky z-auto top-0 shadow-sm shadow-slate-400">
      <div className="header_logo h-8 mr-5">
        <h1 className="text-3xl font-extrabold text-blue-900 items-center pb-4">
          EGrievance
        </h1>
      </div>
      <div className="q_header_icons flex">
        <Link to="/">
          <div className="qheader_icon">
            <AiOutlineHome className="hover:bg-slate-100 rounded-2xl" />
          </div>
        </Link>

        <div className="qheader_icon">
          <SlUserFollowing className="hover:bg-slate-100 rounded-2xl" />
        </div>
        <div className="qheader_icon">
          <AiFillEdit className="hover:bg-slate-100 rounded-2xl" />
        </div>
        <div className="qheader_icon">
          <AiOutlineUsergroupAdd className="hover:bg-slate-100 rounded-2xl" />
        </div>
        <div className="qheader_icon">
          <IoMdNotificationsOutline className="hover:bg-slate-100 rounded-2xl" />
        </div>
      </div>
      
      <SearchForm/>

      <div className="remainimg flex items-center">
      {user ? (
      // <UserDropDown/>
      <button onClick={logoutUser}  className="block py-2 px-5 text-sm text-
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
      
      ):(<Link to="/login">
              <div className="avatar qheader_icon">
                <RxAvatar className="hover:bg-slate-100 rounded-2xl" /> 
              </div>
            </Link>
            )}
       

        <MdOutlineLanguage className="text-3xl text-slate-400 hover:text-red-900 hover:bg-slate-100 rounded-2xl" />
        <button
          onClick={() => setIsModalOpen(true)}
          className="ml-6 bg-blue-900 cursor-pointer h-12 rounded-full border-2 rounder-md w-40 text-white hover:bg-red-700"
        >
          Add Complaint
        </button>
        <Modal
          open={isModalOpen}
          closeIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
        >
          <div className="modal_title flex items-center mb-1 border-b-2 border-slate-400">
            <h1 className="text-slate-300 text-xl cursor-pointer font-medium mr-8 hover:text-red-600">
              Add Question
            </h1>
            <h1 className="text-slate-300 text-xl cursor-pointer font-medium mr-8 hover:text-red-600">
              Share Link
            </h1>
          </div>
          <div className="modal_info flex items-center mt-8">
            <RxAvatar className="avatar text-3xl" />
            
            <div className="modal_scope flex items-center text-slate-400 p-1 ml-3 bg-white rounded-3xl cursor-pointer">
              <BsPeopleFill className="text-3xl" />
              <p className="ml-3 text-lg text-slate-400">Public</p>
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className="modal_field flex flex-col mt-8 flex-1">
            <QuestionForm setIsModalOpen={false} />
         
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
