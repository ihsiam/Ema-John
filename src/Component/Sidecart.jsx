import React from 'react'

function Sidecart({subtotal}) {

     let shipping = 0;
    if(subtotal>150){
        shipping = 0;
    }
    else if(subtotal>100){
        shipping = 10;
    }
    else if(subtotal>0){
        shipping = 15.00;
    }

  return (
    <div className='mt-10 md:px-10 md:py-5 flex flex-col gap-5'>
     <div className='mx-auto'>
          <input className='px-4 py-2 rounded mr-2 focus:outline-none' type="text" placeholder='Coupon Code'/>
          <button className='px-4 py-2 bg-[#505050] text-white font-bold rounded'>Apply</button>
     </div>
     <div className='sideCartDiv'>
          <p>Subtotal:</p>
          <p>${parseFloat(subtotal).toFixed(2)}</p>
     </div>
     <div className='sideCartDiv'>
          <p>Shipping fee</p>
          <p>${parseFloat(shipping).toFixed(2)}</p>
     </div>
     <div className='sideCartDiv'>
          <p>Total</p>
          <p>${parseFloat(subtotal+shipping).toFixed(2)}</p>
     </div>
     <button className='px-4 py-2 bg-[#EA659C] w-fit rounded mx-auto text-white font-bold'>CHECKOUT</button>
     <div className="flex flex-col gap-5  border-t-2 border-black pt-5">
          <p>Basic shipping charge is <strong>$15</strong></p>
          <p>For more than <strong>$100</strong> shipping charge is <strong>$10</strong></p>
          <p>For more than <strong>$150</strong> shipping charge is <strong>$00</strong></p>
     </div>
    </div>
  )
}

export default Sidecart