import React from 'react';
import { useOutletContext } from 'react-router-dom'

const HostCamperInfo = () => {
  const [ currentCamper] = useOutletContext();
  return (
    <section className='flex flex-col gap-2'>
      <p><span className='font-bold'>Name: </span>{currentCamper.name}</p>
      <p><span className='font-bold'>Category: </span>{currentCamper.type}</p>
      <p><span className='font-bold'>Description: </span>{currentCamper.description}</p>
      <p><span className='font-bold'>Visibility: </span>public</p>
    </section>
  )
}

export default HostCamperInfo