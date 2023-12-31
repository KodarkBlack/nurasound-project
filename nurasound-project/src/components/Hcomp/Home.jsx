import React from 'react'
import ListLine from '../Hcomp/Navbar'
import BackGroundImage from '../../assets/background.png'
import Button from '../Button'
import Navbar from '../Hcomp/Navbar'

const Home = () => {
  return (
    <div className='w-full h-inherit bg-black mt-[-5%] relative'>
      <img className='w-full h-[700px] pb-[10%]' src={BackGroundImage} alt="" />
      
      <div className='absolute w-screen top-10 '>
        <Navbar />
        <div className='mt-[25%] items-center'>
          <p className='text-white text-center'>OUR BIGGEST SALE NOW LIVE</p>
          <h5 className='w-[100%] text-[40px] text-white text-center mb-5'>Black Friday Starts Now</h5>
          <Button props='SHOP SALE NOW' className='bg-white justify-center items-center text-black rounded-full h-8 w-[15%]' />
        </div>
      </div>
    </div>
  )
}

export default Home