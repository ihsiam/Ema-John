import React, { useState } from 'react'
import SignIn from '../Component/SignIn'
import SingUp from '../Component/SingUp';
import { motion } from 'framer-motion';


function User() {

  const [Signin, setSignIn] = useState(true);
  const [Signup, setSignUp] = useState(false);

  return (
    <div>
      <motion.div
      initial={{ opacity: 0, scale: 0}}
      animate={{ opacity: 1, scale: 1}}
      exit={{ opacity: 0, scale: 1}}
      transition={{ duration: 1, type:"spring" }}
      className='absolute top-16 right-2 shadow-2xl bg-white rounded-md px-4 py-2 md:px-10 md:py-4'>
        {Signin && <SignIn setSignIn={setSignIn} setSignUp={setSignUp}/>}
        {Signup && <SingUp setSignIn={setSignIn} setSignUp={setSignUp}/>}     
      </motion.div>
    </div>
  )
}

export default User