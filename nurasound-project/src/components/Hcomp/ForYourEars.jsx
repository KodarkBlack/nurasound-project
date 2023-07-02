import React from 'react'
import Phones from '../../assets/phone.png'
import Button from '../Button'

const ForYourEars = () => {
  return (
    <div className='w-[100%] h-[450px] bg-blue-600'>
        {/* This is for your ears. */}
        <div className='flex'> 
            <img className='ml-5' width={350} src={Phones} alt="" />

            

            <div className='mt-[7%] ml-[20%]'>
                <h3 className='text-white w-60 font-bold text-5xl text-left'>For your ears only.</h3>
                <p className='text-white w-[350px] mb-5 text-[18px] text-left'>Normal hearing varies significantly from person to person, and these variations make a big difference to how you experience music</p>
                <p className='text-white w-[350px] mb-5 text-[18px] text-left'>The first time you use Nura earbuds, they measure your hearing to create your personalized hearing profile</p>
                <Button props='clicked this' className='bg-white rounded-full w-[100px]' />
            </div>
        </div>
      
    </div>
  )
}

export default ForYourEars
