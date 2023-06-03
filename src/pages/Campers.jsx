import React, {useEffect, useState} from 'react';
import { Link, useSearchParams} from 'react-router-dom';
import { getCampers } from '../api';


const Campers = () => {
  
  const [campers, setCampers] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  
  
  const typeFilter = searchParams.get('type')
  console.log(searchParams.toString())
  
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
    async function loadCampers() {
      setLoading(true)
      try {
        const data = await getCampers()
        setCampers(data)
      } catch(err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    loadCampers()
  },[])

  if(loading) {
    return <h1>Loading...</h1>
  }

  if(error) {
    return <h1>There was an error: {error.message}</h1>
  }

  const camperElements = filterCampers?.map((camper, index) => (
    <Link 
      to={camper.id}
      state={{ 
        search: `?${searchParams.toString()}`, type: typeFilter }}
    >
      <div 
        key={camper.id} 
        className='flex flex-col gap-2'
      >
        <img src={camper.imageUrl} alt='camper img' className='rounded-xl'/>
        <div className='flex flex-col gap-2'>
          <h3 className='font-bold'>{camper.name}</h3>
          <p className='font-bold'>{camper.price}<span>/day</span></p>
        </div>
        <p className={`p-4 text-white font-bold tracking-wide text-center rounded-lg ${btnColor[index]}`}><em>{camper.type}</em></p>
      </div>
    </Link>
  ))

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if(value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  
  return (
    <div className='p-4 md:p-16 flex flex-col gap-8'>
      <h1 className='font-bold'>Explore our van options</h1>
      <div className='flex items-center gap-2'>
        <button 
          onClick={() => handleFilterChange("type", "simple")} 
          className=
            {`px-4 py-2 font-semibold bg-[#FEB139] rounded-lg hover:bg-[#ff5100] hover:text-[white] ${typeFilter === 'simple' && 'bg-[#ff5100] text-[white]'}`}>Simple
        </button>
        <button 
          onClick={() => handleFilterChange("type", "luxury")} 
          className={`px-4 py-2 font-semibold bg-[#FEB139] rounded-lg hover:bg-emerald-900 hover:text-[white] ${typeFilter === 'luxury' && 'bg-emerald-900 text-[white]'}`}>Luxury
        </button>
        <button  
          onClick={() => handleFilterChange("type", "rugged")} 
          className={`px-4 py-2 font-semibold bg-[#FEB139] rounded-lg hover:bg-[black] hover:text-[white] ${typeFilter === 'rugged' && 'bg-[black] text-[white]'}`}>Rugged
        </button>
        
        { typeFilter &&
          <button 
            onClick={() => handleFilterChange("type", null) } 
            className='px-4 py-2 font-semibold bg-[#FEB139] rounded-lg hover:bg-[#3e6ccf] hover:text-[white]'>Clear Filter
          </button>
        }
        
        
      </div>
      
      <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-12'>
        {camperElements}
      </div>
    </div>
  )
}

export default Campers