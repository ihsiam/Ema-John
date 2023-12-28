import React, { useState } from 'react'
import Sidecart from '../Component/Sidecart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';

function Cart({CartData,setCartData, handleRemove}) {

  const itemView = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const containerView = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const handleIncrement = (index) => {
    const updatedCart = [...CartData];
    updatedCart[index].quantity += 1;
    setCartData(updatedCart);
  };

  const handleDecrement = (index) => {
    const updatedCart = [...CartData];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartData(updatedCart);
    }
  };


  const handleClick = (key) =>{
    handleRemove(key);
  }



  const totalPrice = CartData.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='px-2 md:px-10 py-5 flex flex-col lg:flex-row w-full'>

      <div className='w-full lg:w-2/3'>

        <h1 className='text-3xl font-bold text-[#505050]'>
          Shopping cart ({CartData.length ? CartData.length : "No"} item{CartData.length >1 ? 's' : ""})
        </h1>


        <motion.div variants={containerView} initial='initial' animate='animate' className='mt-10'>
          {CartData.map((item, index) => (
            <motion.div variants={itemView} className='py-2 md:py-5 flex md:gap-5 shadow-md bg-white mb-5 rounded items-center justify-around' key={item.key}>

              <div className='flex items-center'>
                <img className='h-16 w-16 md:h-24 md:w-24' src={item.img} alt="" />
              </div>

              <div>
                <h1 className='text-xs md:text-lg font-bold w-40 md:w-80'>{item.name.slice(0,30)}...</h1>

                <div className='flex mt-2'>
                  <button className='cartQun' onClick={() => handleIncrement(index)}>+</button>
                  <h1 className='cartQun'>{item.quantity}</h1>
                  <button className='cartQun' onClick={() => handleDecrement(index)}>-</button>
                </div>
              </div>

              <p className='text-xs md:text-base font-bold w-16 md:w-20'>${parseFloat(item.price*item.quantity).toFixed(2)}</p>

              <button onClick={() => handleClick(item.key)}>
                <FontAwesomeIcon className='text-[#F70000]' icon={faTrash} />
              </button>
            </motion.div>
          ))}

        </motion.div>
      </div>
      
      <div className='w-full lg:w-1/3 h-fit'>
        <Sidecart subtotal={totalPrice}/>
      </div>
    </div>
  )
}

export default Cart