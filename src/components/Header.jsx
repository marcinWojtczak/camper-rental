import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row justify-between items-center p-4'>
      <Link to='/' className='font-semibold tracking-wide text-3xl'>CamperventureRental</Link>
      <nav className='p-4 flex justify-between'>
        <ul className='flex justify-center items-center gap-8'>
          <li>
            <Link to='/host' className='text-2xl font-semibold'>Host</Link>
          </li>
          <li>
            <Link to='/about' className='text-2xl font-semibold'>About</Link>
          </li>
          <li>
            <Link to='/campers' className='text-2xl font-semibold'>Campers</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header