import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const HostCampers = () => {

  const [campers, setCampers] = useState([])
  console.log(campers)
  useEffect(() => {
    fetch("/api/host/campers")
      .then(res => res.json())
      .then(data => setCampers(data.vans))

  }, [])

  const hostCampersElement = campers?.map((camper) => (
    <Link 
      to={camper.id}
      key={camper.id}
    >
      <div className='flex w-full bg-[white] p-7 rounded-xl gap-4'>
        <img src={camper.imageUrl} alt={`Camper of ${camper.name}`} className='w-[35%] rounded-md'/>
        <div className='flex flex-col justify-center gap-4'>
          <h3 className='font-bold'>{camper.name}</h3>
          <p className='font-semibold'>${camper.price}/day</p>
        </div>
      </div>
    </Link>
  ))

  return (
    <section className='flex flex-col p-4 gap-8'>
      <h2>Your listed campers</h2>
      <div>
        { campers.length > 0 ? (
          <section className='flex flex-col gap-12'>
            {hostCampersElement}
          </section>
        ) : (
          <h2>Loading...</h2>
        )
        }
      </div>
    </section>
  )
}

export default HostCampers