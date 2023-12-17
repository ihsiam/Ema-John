import React from 'react'
import wave from '../logo/wave.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

function Footer() {
  return (
    
    <div className=' text-white'>
     <img src={wave}/>

     <div className='bg-[#090830] grid grid-cols-2 lg:grid-cols-4 gap-10 w-full px-10 md:pl-48 py-5'>
          <div>
            <h1 className='footerH'>Company</h1>
            <p className='footerP'>Privacy Policy</p>
            <p className='footerP'>API</p>
            <p className='footerP'>Terms</p>
          </div>
          <div>
            <h1 className='footerH'>Get Help</h1>
            <p className='footerP'>FAQ</p>
            <p className='footerP'>Payment option</p>
            <p className='footerP'>Watch Video</p>
          </div>
          <div>
            <h1 className='footerH'>Office</h1>
            <p className='footerP'>Level-5, House No: 5</p>
            <p className='footerP'>Block-B, Mirpur-10</p>
            <p className='footerP'>Dhaka, Bangladesh</p>
          </div>
          <div>
            <h1 className='footerH'>Social Links</h1>
            <div>
              <FontAwesomeIcon className='footerIcon' icon={faFacebook} />
              <FontAwesomeIcon className='footerIcon' icon={faTwitter} />
              <FontAwesomeIcon className='footerIcon' icon={faInstagram} />
            </div>
          </div>
     </div>

     <div className='text-white bg-[#090830] px-2 lg:px-20 pb-2'>
      <h1 className='text-xs text-center font-medium'>
        <FontAwesomeIcon className='mr-1' icon={faCopyright} /> 
        All Rights Reserved.
      </h1>
     </div>

    </div>
  )
}

export default Footer