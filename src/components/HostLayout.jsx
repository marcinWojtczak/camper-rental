import React from 'react';
import  { NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {

  const baseStyle = {
    fontSize: '16px', 
    fontWeight: '500'
  }

  const activeStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'red',
    textDecoration: 'underline',
  }

  return (
    <>
      <nav className='p-4 flex'>
        <ul className='flex justify-center items-center gap-4 sm:gap-8  '>
          <li>
            <NavLink 
              to='/host' 
              end
              style={({isActive}) => isActive ? activeStyle : baseStyle}
            >Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/host/income' 
              style={({isActive}) => isActive ? activeStyle : baseStyle}
            >Income
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/host/campers'
              style={({isActive}) => isActive ? activeStyle : baseStyle}
            >Campers
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/host/reviews'
              style={({isActive}) => isActive ? activeStyle : baseStyle}
            >Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default HostLayout