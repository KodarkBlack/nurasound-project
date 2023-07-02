import React from 'react'
import Phones from '../../assets/phone.png'
import Button from '../Button'
import Bgimg from '../../assets/bgimg.png'

const ForYourEars = () => {
  return (
    <div className='w-[100%] h-[450px] bg-black'>
        {/* This is for your ears.
        <div className='flex'> 
            <img className='ml-5' width={350} src={Phones} alt="" />

            

            <div className='mt-[7%] ml-[20%]'>
                <h3 className='text-white w-60 font-bold text-5xl text-left'>For your ears only.</h3>
                <p className='text-white w-[350px] mb-5 text-[18px] text-left'>Normal hearing varies significantly from person to person, and these variations make a big difference to how you experience music</p>
                <p className='text-white w-[350px] mb-5 text-[18px] text-left'>The first time you use Nura earbuds, they measure your hearing to create your personalized hearing profile</p>
                <Button props='Learn more' className='bg-none outline  rounded-full w-[100px]' />
            </div>
        </div> */}
        <div className='items-center ml-[40%] w-[300px] h-[100%]'>
          <img src={Bgimg} width={350} className='absolute' alt="" />
          <div className=''>
            <h3 className='text-white z-5'>Play from any device</h3>
            <p className='text-white z-5'>Your hearing profile is stored on the earbuds, and is applied to whatever you listen to, on any device.</p>
            <p className='text-white'>Use the Nura app to create a hearing profile, configure touch buttons, adjust immersion mode and more.</p>
          </div>
        </div>
      
    </div>
  )
}

export default ForYourEars
