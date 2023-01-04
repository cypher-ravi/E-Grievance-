import React,{useState,useContext} from 'react'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
import {IoMdClose} from 'react-icons/io'
import SignUpModalForm from '../components/SignUpModalForm';
import AuthContext from '../context/AuthContext';
// import { useGoogleLogin } from '@react-oauth/google';



const Login = () => {
  // useEffect(() => {
  //   const Googlelogin = useGoogleLogin({
  //     onSuccess: tokenResponse => console.log(tokenResponse),
  //   });
  
  //   return Googlelogin
  // }, [])
  
  let {loginUser} = useContext(AuthContext)
  const [isModalOpen,setIsModalOpen] = useState(false);
  const Close = (<IoMdClose className='text-2xl font-bold'/>)

  return (
    <div  className="bg-[url('https://cdn.pixabay.com/photo/2016/11/01/18/38/background-1789175_960_720.png')] h-[90vh] flex ">
        
      <div className="container m-auto h-[70vh] w-2/4 items-center bg-[#FFFFFF] rounded-md shadow-md">

        <div className='ml-[300px] pt-2'>
          <h1 className='text-4xl ml-4 font-extrabold text-blue-800'>EGrievance</h1>
        </div>
       
        <div className='lg:grid grid-cols-2 gap-5 items-center mt-5 p-5 '>
        

        <div className="w-4/5  items-center ml-10">
          

         <div className="py-10" >
         <Modal open={isModalOpen} closeIcon={Close} onClose={()=>setIsModalOpen(false)} closeOnEsc center closeOnOverlayClick={false}>
             
              <SignUpModalForm />
            </Modal>
            <div> 

              <p className='mb-16 text-slate-400'>By continuing you indicate that you agree to EGrievance's <spam className="text-blue-500 hover:underline cursor-pointer">Terms of Service</spam> and <spam className="text-blue-500 hover:underline cursor-pointer">Privacy Policy</spam>.</p>

            <button  type="button" className="w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mb-8">
                <svg className="mr-2 ml-14 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                Continue with Google
              </button>
             
            </div>

            <div>
            <button type="button" className=" w-full text-white bg-[#3b5998] hover:bg-[#3b5998]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 ">
                <svg className="mr-2 ml-14 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
              Continue with Facebook
              </button>

             <div className='mt-5 pl-20'>
            <button onClick={()=>setIsModalOpen(true)}  type="button" className='font-bold text-[#707070] hover:text-red-800' >New user? Create account</button>
              </div> 

            </div>

         </div>

        </div>
        
         
        <div className='border-l-2 border-slate-400 w-full'>

        <div className="py-10">
          <div className='text-center'>
         <h1 className='text-black text-[32px] font-bold '>Login</h1>
       
          </div>

         <div className='px-20 '>
         <form onSubmit={loginUser}>

            <div className="relative z-0 mb-6 w-full group mt-5">

                 <input type="username" name="username" id="floating_username" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                 
                <label htmlFor="floating_username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
            </div>

            <div className="relative z-0 mb-6 w-full group mt-5">

                 <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />


                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>

            <div>
            <button type="submit" className="w-full focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500  font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Login</button>
            </div>
             <div className='pl-16'>
              <p className='text-slate-300 cursor-pointer hover:text-black'>Forget password?</p>
             </div>


          </form>
         </div>


         
        </div>
        </div>


        </div>
      </div>
    </div>
  )
}

export default Login
