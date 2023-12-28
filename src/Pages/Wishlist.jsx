import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Wishlist({ data, removeWish }) {
  const remove = (key) => {
    removeWish(key);
  };

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

  return (
    <div className='px-2 md:px-10 lg:px-40 py-5'>
      <h1 className='text-3xl font-bold text-[#505050] text-center'>My Wishlist</h1>

      <div className='mt-10'>
        {data.length ? (
          <motion.div variants={containerView} initial='initial' animate='animate'>
            {data.map((item) => (
              <motion.div
                key={item.key}
                variants={itemView}
                className='flex justify-around shadow-md bg-white rounded-md items-center py-5 mb-5'
              >
                <img className='h-14 w-14 md:w-24 md:h-24' src={item.img} alt={item.name} />

                <Link to={item.key} state={item}>
                  <h1 className='w-40 md:w-80 lg:w-96 text-xs md:text-lg font-bold text-[#505050]'>
                    {item.name.slice(0, 30)}.....
                  </h1>
                </Link>

                <h1 className='text-xs md:text-base font-bold '>${item.price}</h1>

                <button onClick={() => remove(item.key)}>
                  <FontAwesomeIcon className='text-[#F70000]' icon={faTrash} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className='text-2xl font-bold text-[#505050] text-center'
          >
            No Item
          </motion.h1>
        )}
      </div>
    </div>
  );
}

export default Wishlist;