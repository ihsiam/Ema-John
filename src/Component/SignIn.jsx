import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

function SignIn({setSignIn, setSignUp}) {

  return (
     <div>
          <div className='flex gap-4 justify-between mt-2 md:mt-4'>
            <button className='userBtn text-white bg-[#3F5A8F] border-[#3F5A8F]'>
              <FontAwesomeIcon icon={faFacebook} />
              <h1>Facebook</h1>
            </button>
            <button className='userBtn text-[#454442] border-[#454442]'>
              <FontAwesomeIcon icon={faGoogle} />
              <h1>Google</h1>
            </button>
          </div>


          <div className='flex flex-col w-full mt-4 gap-2'>
            <div className='userInputDiv'>
              <FontAwesomeIcon icon={faUser} />
              <input className='userInput'
              type="text" placeholder='Username' name="username" id="username" />
            </div>

            <div className='userInputDiv'>
              <FontAwesomeIcon icon={faLock} />
              <input className='userInput'
              type="password" placeholder='Password' name="password" id="password" />
            </div>
            <button
            className='px-10 py-2 bg-black text-xs md:text-base text-white font-bold h-fit mx-auto rounded mt-2'>
              Sign Up
            </button> 
          </div>

          
          <div className='flex text-xs text-[#5F666C] gap-4 mt-2 cursor-pointer'>
            <h1>Forgotten Password?</h1>
            <h1 onClick={() =>{
              setSignIn(false);
              setSignUp(true);
            }}>Sign Up</h1>
          </div>
     </div>
  )
}

export default SignIn