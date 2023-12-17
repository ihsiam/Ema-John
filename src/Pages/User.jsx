import React, { useState } from 'react'
import SignIn from '../Component/SignIn'
import SingUp from '../Component/SingUp';


function User() {

  const [Signin, setSignIn] = useState(true);
  const [Signup, setSignUp] = useState(false);

  return (
    <div>
      <div className='absolute top-16 right-2 md:right-5 bg-white rounded px-4 py-2 md:px-10 md:py-4 border-2 border-[#081A51]'>
        {Signin && <SignIn setSignIn={setSignIn} setSignUp={setSignUp}/>}
        {Signup && <SingUp setSignIn={setSignIn} setSignUp={setSignUp}/>}
      </div>
    </div>
  )
}

export default User