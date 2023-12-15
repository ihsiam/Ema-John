import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import {faHeart, faUser} from '@fortawesome/free-regular-svg-icons'
import Logo from '../logo/logo.svg'
import { NavLink } from 'react-router-dom'

function Navbar(props) {

     const handleSearch = (e) =>{
          props.search(e.target.value);
     }

  return (
    <div className='flex w-full justify-between items-center px-2 md:px-5 py-2'>
     <NavLink to='/'>
          <img className=' w-16 h-8 md:w-32 md:h-10 fill-black' src={Logo} alt="Logo"/>
     </NavLink>

     <div>
          <input
          onChange={handleSearch}
          className=' w-28 md:w-64 px-2 py-1 rounded border-2 focus:outline-none'
          type="text" placeholder='Search here' />
     </div>

     <div className='flex items-center'>
          <NavLink to='/user'>
               <FontAwesomeIcon className='icon' icon={faUser} />
          </NavLink>

          <NavLink className='mx-4 md:mx-8' to='/wishlist'>
               <FontAwesomeIcon className='icon' icon={faHeart} />
          </NavLink>

          <NavLink to='/cart'>
               <FontAwesomeIcon className='icon' icon={faCartShopping} />
          </NavLink>
     </div>
    </div>
  )
}

export default Navbar