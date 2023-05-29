import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostCamperPhotos = () => {

  const [currentCamper] = useOutletContext()
  return (
    <img src={currentCamper.imageUrl} alt='camper img'/>
  )
}

export default HostCamperPhotos