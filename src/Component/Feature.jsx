import React from 'react'

function Feature({details}) {
  return (
    <div>
      <div className='px-2 py-5 md:px-5 lg:px-28 lg:py-10'>

        <h1 className='h1Cmn hBtn'>Key features</h1>

        {details.length ?
          <div className='mt-5'>
            {
              details.map((item, key) =>(
                <div key={key} className='block md:flex mt-2'>
                  <h1 className='h1Cmn'>{item.description}:</h1>
                  <h1 className='md:ml-2 spnCmn'>{item.value}</h1>
                </div>
              ))
            }
          </div>
          
          : 

          <div className='mt-5'>
            <h1 className='h1Cmn text-xl'>No key features.</h1>
          </div>
        }
      </div>

    </div>
  )
}

export default Feature