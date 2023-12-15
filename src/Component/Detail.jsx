import React from 'react'
import Star from './Star'


function Detail(props) {

const {category, img, name, price, seller, star, starCount, stock} = props.data;

  return (
    <div className=' bg-white'>
     <div className='flex flex-col md:flex-row px-5 lg:px-40 py-5 md:py-3 items-center'>
        <img src={img} className='h-40 w-40 md:h-60 md:w-60 lg:w-72 lg:h-72 rounded'/>
        <div className='md:px-20 mt-5 md:mt-0 flex flex-col gap-3 md:gap-5'>
          <h1 className='text-sm md:text-base h1Cmn'>{name}</h1>
          <div className='flex'>
              <Star star={star}/>
              <h1 className='spnCmn'>({starCount} reviews)</h1>
          </div>
          <h1 className='h1Cmn'>Price: <span className='spnCmn'>${price}</span></h1>
          <h1 className='h1Cmn'>Stock: <span className='spnCmn'>{stock}</span></h1>
          <h1 className='h1Cmn'>Category: <span className='spnCmn'>{category}</span></h1>
          <h1 className='h1Cmn'>Seller: <span className='spnCmn'>{seller}</span></h1>
          <div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Detail