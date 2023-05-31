import React from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
      <h1 className='font-semibold w-[60%] text-center leading-snug'>Sorry, the page you were looking for wos not found!</h1>
      <div className='p-5 rounded-md bg-[black] w-[60%] text-center'>
        <Link className='text-[20px] text-[white]' to='/'>Back to home page</Link>
      </div>
    </div>
  )
}

export default NotFound