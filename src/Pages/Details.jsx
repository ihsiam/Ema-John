import React from 'react'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import Detail from '../Component/Detail';
import Feature from '../Component/Feature'

function Details(props) {

  const data = useLocation().state;

  const handleCart = props.handleCart;
  const handleWish = props.handleWish;

  const add = (button, Data) =>{
    button(Data);
  }
  
  return (
    <div className='w-full'>

      <div className='shadow'>
        <Detail data={data}/>

        <div className='pl-5 md:pl-[295px] lg:pl-[520px] bg-white pb-5'>

            <button
            onClick={() => add(handleCart,{...data, quantity : 1})}
            className='detailsButton bg-[#0861F2]'>
              <FontAwesomeIcon className='mr-2' icon={faCartShopping} />
              Buy Now
            </button>

            <button
            onClick={() => add(handleWish,data)}
            className='detailsButton bg-[#30BD63] ml-5'>
              <FontAwesomeIcon className='mr-2' icon={faHeart} />
              Add to wishlist
            </button>

        </div>
      </div>

      <Feature details={data.features}/>

    </div>
  )
}

export default Details