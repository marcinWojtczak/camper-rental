import React, {useEffect, useState} from 'react';
import { Link, useSearchParams} from 'react-router-dom';

const Campers = () => {
  
  const [campers, setCampers] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  
  const typeFilter = searchParams.get('type')
  console.log(typeFilter)
  
  //if there is typeFilter
  const filterCampers = typeFilter 
    ? campers.filter(camper => camper.type === typeFilter)
    : campers

  const btnColor = campers.map((camper) => { 
    if(camper === 'simple') {
      return "bg-[#FD5E53]"
    } else if(camper === 'rugged') {
      return "bg-emerald-900"
    } else {
      return "bg-[black]"
    }
  })


  useEffect(() => {
    fetch("/api/campers")
      .then(res => res.json())
      .then(data => setCampers(data.vans))
  }, [])


  const camperElements = filterCampers?.map((camper, index) => (
    <Link to={`/campers/${camper.id}`}>
      <div key={camper.id} className='flex flex-col gap-2'>
        <img src={camper.imageUrl} alt='camper img' className='rounded-xl'/>
        <div className='flex flex-col gap-2'>
          <h3 className='font-bold'>{camper.name}</h3>
          <p className='font-bold'>{camper.price}<span>/day</span></p>
        </div>
        <p className={`p-4 text-white font-bold tracking-wide text-center rounded-lg ${btnColor[index]}`}><em>{camper.type}</em></p>
      </div>
    </Link>
  ))
  
  return (
    <div className='p-4 md:p-16 flex flex-col gap-8'>
      <h1 className='font-bold'>Explore our van options</h1>
      <div className='flex items-center gap-2'>
        <Link to='?type=simple' className='px-4 py-2 font-semibold bg-[#FEB139] rounded-lg hover:bg-[#FD5E53] hover:text-[white]'>Simple</Link>
        <Link to='?type=luxury' className='px-4 py-2 font-semibold bg-[#FEB139] rounded-lg hover:bg-emerald-900 hover:text-[white]'>Luxury</Link>
        <Link to='?type=rugged' className='px-4 py-2 font-semibold bg-[#FEB139] rounded-lg hover:bg-[black] hover:text-[white]'>Rugged</Link>
        <Link to='.' className='px-4 py-2 font-semibold bg-[#FEB139] rounded-lg hover:bg-[#3e6ccf] hover:text-[white]'>All</Link>
      </div>
      
      <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-12'>
        {camperElements}
      </div>
    </div>
  )
}

export default Campers