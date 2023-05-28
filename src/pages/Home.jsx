import React from 'react'
import HomeImg from '../assets/images/home-hero.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='flex flex-col gap-4 '>
      <div style={{backgroundImage: `url(${HomeImg})`}} className='min-h-[550px] md:min-h-[750px]  bg-center bg-cover flex flex-col justify-center items-center'>
        <div className='w-[90%] md:w-[70%] flex flex-col gap-4 '>
          <h1 className='p-4 text-[56px] tracking-wide leading-tight font-extrabold text-[white] '>Explore the Great Outdoors with Our Premium Camper Rentals</h1>
          <p className='p-4 text-[white]'>
            Embark on unforgettable adventures and experience the beauty of nature with our top-notch camper rentals. Whether you're planning a weekend getaway or a cross-country road trip, our expert team is here to make your journey comfortable and hassle-free. Discover the freedom of the open road and create memories that will last a lifetime.
          </p>
          <Link to="/vans" className='text-[white] text-xl font-bold tracking-wide p-4 bg-[#FD5E53] text-center rounded-md'>Find your van</Link>
        </div>
      </div>
    </section>
  )
}

export default Home