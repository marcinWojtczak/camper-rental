import React from 'react';
import { Link } from 'react-router-dom';
import AboutImg from '../assets/images/about-hero.png';

const About = () => {
  return (
    <>
      <Link to='/'>CamperventureRental</Link>
      <section className='flex flex-col gap-4'>
        <img src={AboutImg} alt='about img'/>
        <div className='p-4 flex flex-col gap-4'>
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </p>
        </div>
        <div className='m-4 flex flex-col gap-4 h-[300px] bg-cyan-300'>
          <h2 className='p-4'>Your destination is waiting.<br />Your van is ready.</h2>
          <Link className='p-4 'to="/vans">Explore our vans</Link>
        </div>
      </section>
    </>
  )
}

export default About