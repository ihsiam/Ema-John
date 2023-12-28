import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

function ContainerView(props) {

     const data = props.data;

  return (
    <div>

      {data.length ?

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {
            data.map((data) =>(
              <Link key={data.key} to={data.key} state={data}>
    
                <motion.div
                initial={{ opacity: 0, scale: .5}}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: .5 }}
                className='flex flex-col rounded-lg  bg-[#FCFCFC] shadow-lg'>
    
                  <div className='flex justify-center w-full px-2 py-2'>
                    <img className='h-20 w-20 md:h-32 md:w-32 rounded-t' src={data.img} alt="" />
                  </div>
    
                  <div className='px-2 py-2 md:px-4 md:py-4 bg-[#081A51] rounded-b-lg text-white'>
                    <h1 className='text-sm md:text-base lg:text-lg font-bold pb-1'>{data.name.slice(0,15)}...</h1>
                    <h1 className='text-xs lg:text-base font-semibold'>Price: ${data.price}</h1>
                  </div>
                  
                </motion.div>
              </Link>
            ))
          }
        </div>

        :

        <h1 className='w-full text-xl mt-5 text-center'>No item found</h1>
      }
    </div>
  )
}

export default ContainerView