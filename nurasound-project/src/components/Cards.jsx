import React from 'react'
import Transmitter from '../../src/assets/transmitter.jpeg'
import Button from './Button'

const Cards = () => {
  return (
    <div className='w-[230px] h-[300px] rounded-2xl bg-white shadow p-4 flex'>
        {/* Card Content */}
        <div className='w-[70px] h-[70px] items-center rounded-full bg-black  ml-[5%] z-50'>
            <h1 className="text-white text-center text-xl  font-bold p-3 ">30%</h1>
            <h1 className='text-white text-xl font-bold mt-[-5%]'>OFF</h1>
            <img className='ml-[50%] mt-[-40%] ' width={500} src={Transmitter} alt="" />
            <div className='items-center absolute'>
            <h5 className='text-black text-xl w-[210px] h-16 mt-5 p-5 font-medium'>Nura Bluetooth 5.3 <br /> Audio Transmitter</h5>
            <p className='font-medium mt-3'>$44.25</p>
            <Button className='bg-blue-900 ' />
            </div>
            
        </div>
      
    </div>
  )
}

export default Cards
