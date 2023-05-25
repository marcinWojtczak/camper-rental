import React from 'react';
import  { Link, Outlet } from 'react-router-dom'

const HostLayout = () => {
  return (
    <>
      <nav className='p-4 flex justify-between'>
        <ul className='flex justify-center items-center gap-8'>
          <li>
            <Link to='/host' className='text-xl hover:underline underline-offset-4 hover:font-medium'>Dashboard</Link>
          </li>
          <li>
            <Link to='/host/income' className='text-xl hover:underline underline-offset-4 hover:font-medium'>Income</Link>
          </li>
          <li>
            <Link to='/host/reviews' className='text-xl hover:underline underline-offset-4 hover:font-medium'>Reviews</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default HostLayout