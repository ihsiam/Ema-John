import React from 'react'
import { useLocation } from 'react-router-dom'
import Detail from '../Component/Detail'
import Feature from '../Component/Feature';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function WishListDetails(props) {
     const data = useLocation().state;

     const handleCart = props.handleCart;

  return (
    <div>
      <Detail data={data}/>
      <div className='pl-5 md:pl-[295px] lg:pl-[520px] bg-white pb-5'>
        <button
        onClick={() => handleCart({...data, quantity : 1})}
        className='detailsButton bg-[#0861F2]'>
          <FontAwesomeIcon className='mr-2' icon={faCartShopping} />
          Buy Now
        </button>
      </div>
      
      <Feature details={data.features}/>
    </div>
  )
}

export default WishListDetails