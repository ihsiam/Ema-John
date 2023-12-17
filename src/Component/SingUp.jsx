import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Icon from '../logo/favicon.ico';

function SingUp({setSignIn, setSignUp}) {
  return (
     <div>
          <h1 className='text-center font-semibold text-[#081A51] mt-2 px-7 md:px-[55px]'>Welcome to our family</h1>
          <div className='flex flex-col w-full mt-2 gap-2'>

            <div className='userInputDiv'>
              <FontAwesomeIcon icon={faEnvelope} />
              <input className='userInput'
              type="email" placeholder='Email' name="username" id="username" />
            </div>

            <div className='userInputDiv'>
              <FontAwesomeIcon icon={faLock} />
              <input className='userInput'
              type="password" placeholder='Password' name="password" id="password" />
            </div>

            <div className='userInputDiv'>
              <FontAwesomeIcon icon={faLock} />
              <input className='userInput'
              type="password" placeholder='Re-type Password' name="password" id="password" />
            </div>

            <button
            className='px-10 py-2 bg-black text-xs md:text-base text-white font-bold h-fit mx-auto rounded mt-2'>
              Sign Up
            </button> 
          </div>

          <div className='flex text-xs gap-4 mt-2 cursor-pointer'>
            <h1 className='text-[#5F666C]'>Already have account?</h1>
            <h1
            className='text-[#081A51] font-bold'
            onClick={() =>{
              setSignIn(true);
              setSignUp(false);
            }}>Sign In</h1>
          </div>
     </div>
  )
}

export default SingUp