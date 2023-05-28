import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {

  const baseStyle = {
    fontSize: '18px', 
    fontWeight: '500',
  }

  const activeStyle = {
    fontWeight: 'bold',
    color: 'red',
    textDecoration: 'underline',
    fontSize: '18px'
  }
  return (
    <header className='flex flex-col sm:flex-row justify-between items-center p-4'>
      <NavLink to='/' className='font-semibold tracking-wide text-3xl'>CamperventureRental</NavLink>
      <nav className='p-4 flex justify-between'>
        <ul className='flex justify-center items-center gap-8'>
          <li>
            <NavLink 
              to='/host' 
              style={({isActive}) => isActive ? activeStyle : baseStyle}
            >Host
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/about'
              style={({isActive}) => isActive ? activeStyle : baseStyle} 
            >About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/campers' 
              style={({isActive}) => isActive ? activeStyle : baseStyle}
            >Campers
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header