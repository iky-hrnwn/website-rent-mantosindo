import React from 'react';
import heroCamera from "../assets/hero-camera.jpg";

const Hero = () => {
  return (
    <div>
        <img src={heroCamera} alt="camera" className='absolute -z-50 w-screen h-1/2 bg-no-repeat object-cover' />
        <div className='h-screen px-6 md:px-16 lg:px-24 xl:px-32'>
            <h1 className='font-display text-[clamp(4rem,12vw,10rem)] leading-[0.85] -ml-2 overflow-hidden'>Rent<br/>Pro<br/>Camera</h1>
            <p>Access tools camera professional for your project.<br/>Good quality and price.</p>
        </div>
    </div>
  )
}

export default Hero
