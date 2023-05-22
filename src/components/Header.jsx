import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row justify-between items-center p-4'>
      <h1 className='font-semibold tracking-wide'>CamperventureRental</h1>
      <nav className='p-4 flex justify-between'>
        <ul className='flex justify-center items-center gap-8'>
          <li className='list-none'>
            <Link to='/' className='text-2xl font-semibold'>Home</Link>
          </li>
          <li>
            <Link to='/about' className='text-2xl font-semibold'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header