import React, { useEffect, useState } from 'react';
import { useParams, NavLink, Link } from 'react-router-dom';


const HostCamperDetail = () => {

  const { id } = useParams()
  console.log(id)
  const [currentCamper, setCurrentCamper] = useState()
  console.log(currentCamper)

  const btnColor = () => { 
    if(currentCamper.type === 'simple') {
      return "bg-[#FD5E53]"
    } else if(currentCamper.type === 'rugged') {
      return "bg-emerald-900"
    } else {
      return "bg-[black]"
    }
  }
  

  useEffect(() => {
    fetch(`/api/host/campers/${id}`)
      .then(res => res.json())
      .then(data => setCurrentCamper(data.vans))
  }, [id])

  if(!currentCamper) return <h2>Loading...</h2>

  return (
    <div className='flex flex-col p-4 gap-4'>
      <Link to='/host/campers'>&#8592; Back to all campers</Link>
      <div className='flex flex-col bg-white rounded-md gap-4 p-6'>
        <div className='flex gap-4'>
          <img src={currentCamper.imageUrl} width='150' alt={`Camper ${currentCamper.name} `} className='rounded-md'/>
          <div className='flex flex-col gap-2 justify-center'>
            <p className={`p-4 rounded-md w-fit ${btnColor()}`}>{currentCamper.type}</p>
            <h2>{currentCamper.name}</h2>
            <h3>${currentCamper.price}/day</h3>
          </div>
        </div>
        <nav>
          <ul className='flex items-center gap-4 sm:gap-8 '>
            <NavLink
              to='details'
            >Details
            </NavLink>

            <NavLink
              to='/pricing'
            >Pricing
            </NavLink>

            <NavLink
              to='/photos'
            >Photos
            </NavLink>
        </ul>
        </nav>
      </div>
      <p>{currentCamper.description}</p>
    </div>
  )
}

export default HostCamperDetail