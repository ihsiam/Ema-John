import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Wishlist({data, handleRmove}) {

  const remove = (key) =>{
    handleRmove(key)
  }


  return (
    <div className='px-2 md:px-10 lg:px-40 py-5'>
      <h1 className='text-3xl font-bold text-[#505050] text-center'>My Wishlist</h1>
      <div className='mt-10'>
        {data.length ? 
          data.map((data) =>(
              <div key={data.key} className='flex justify-around bg-white rounded-md items-center py-5 mb-5'>
                <img className='h-14 w-14 md:w-24 md:h-24' src={data.img}/>
                <Link to={data.key} key={data.key} state={data}>
                  <h1 className='w-40 md:w-80 lg:w-96 text-xs md:text-lg font-bold text-[#505050]'>{data.name.slice(0,30)}.....</h1>
                </Link>
                <h1 className='text-xs md:text-base font-bold '>${data.price}</h1>
                <button onClick={() => remove(data.key)}>
                  <FontAwesomeIcon className='text-[#F70000]' icon={faTrash} />
                </button>
              </div>
          )) : 

          <h1 className='text-2xl font-bold text-[#505050] text-center'>No Item</h1>
        }
      </div>
    </div>
  )
}

export default Wishlist