import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostCamperPricing = () => {
  const [currentCamper] = useOutletContext()

  return (
    <h2>${currentCamper.price}/day</h2>
  )
}

export default HostCamperPricing