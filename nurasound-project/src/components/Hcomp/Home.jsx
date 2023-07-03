import React from 'react'
import ListLine from '../Hcomp/Navbar'
import BackGroundImage from '../../assets/background.png'
import Button from '../Button'

const Home = () => {
  return (
    <div className='w-full h-[600px]'>
      <img className='w-full h-[600px]' src={BackGroundImage} alt="" />
      
      <div className='absolute w-full top-10  '>
        <ListLine />
        <div className='mt-[15%] items-center'>
          <p className='text-white'>OUR BIGGEST SALE NOW LIVE</p>
          <h5 className='w-[90%] text-[40px] text-white'>Black Friday Starts Now</h5>
          <Button props='SHOP SALE NOW' className='bg-white text-black rounded-full h-8 w-[15%]' />
        </div>
      </div>
    </div>
  )
}

export default Home
