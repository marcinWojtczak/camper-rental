import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const CamperDetail = () => {

  const params = useParams()
  const [camper, setCamper] = useState(null)

  const btnColor = () => { 
    if(camper?.type === 'simple') {
      return "bg-[#FD5E53]"
    } else if(camper.type === 'rugged') {
      return "bg-emerald-900"
    } else {
      return "bg-[black]"
    }
  }

  useEffect(() => {
    fetch(`/api/campers/${params.id}`)
      .then(res =>  res.json())
      .then(data => setCamper(data.vans))
  }, [params.id])
  

  return (
    <div className="p-8">
    {camper
      ? ( <div key={camper.id} className='flex flex-col gap-8'>
            <img src={camper.imageUrl} alt='camper img' className='rounded-xl'/>
            <i className={`p-4 w-[150px] text-white font-bold tracking-wide text-center rounded-lg ${btnColor()}`}>{camper.type}</i>
            <div className='flex flex-col gap-2'>
              <h3 className='font-bold'>{camper.name}</h3>
              <p className='font-bold'>{camper.price}<span>/day</span></p>
              <p>{camper.description}</p>
              <button className="p-4 text-white font-bold tracking-wide text-center rounded-lg bg-[#FEB139]">Rent Van</button>
            </div>
          </div>
        ) 
      : <h2>Loading...</h2>
    }
    </div>
  )
}

export default CamperDetail