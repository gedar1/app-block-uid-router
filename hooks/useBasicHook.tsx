import React, { useState } from 'react'

export const useBasicHook = () => {
  const [message,setMessage] = useState('BasicHook')
  const [user,setUser]= useState(true)
  return {
    message,
    user,
    setUser,
    setMessage,
  }
}

export default useBasicHook