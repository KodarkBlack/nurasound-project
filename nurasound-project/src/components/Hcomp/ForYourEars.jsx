import React from 'react'
import Phones from '../../assets/phone.png'
import Button from '../Button'
import Bgimg from '../../assets/bgimg.png'

const ForYourEars = () => {
  return (
    <div className='w-screen h-[600px] mt-[-2.7%] bg-blue-500 '>
      <div className='flex'>
        <img src={Phones} width={450} className='ml-[10%] z-10' alt="" />
        <div className='mt-[10%] text-left ml-10'>
          <h3 className='text-white w-[30%] text-[50px]'>For your ears only</h3>
          <p className='w-[50%] text-[20px] text-white'>Normal hearing varies significantly from person to person, and these variations make a big difference to how you experience music </p>
          <p className='w-[50%] text-[20px] text-white' >The first time you use Nura earBuds, they measure your hearing to create your personalized hearing profile</p>
          <Button props='Learn more' className=' text-white' />
        </div>
      </div>
    </div>
    // <div>
    //   <div className='w-[100%] h-[500px] bg-blue-500'>
    //     {/* This is for your ears. */}
    //     <div className='flex'> 
    //         <img className='ml-5 z-auto' width={400} src={Phones} alt="" />

            

    //         <div className='mt-[7%] ml-[20%]'>
    //             <h3 className='text-white w-60 font-bold text-5xl text-left'>For your ears only.</h3>
    //             <p className='text-white w-[350px] mb-5 text-[18px] text-left'>Normal hearing varies significantly from person to person, and these variations make a big difference to how you experience music</p>
    //             <p className='text-white w-[350px] mb-5 text-[18px] text-left'>The first time you use Nura earbuds, they measure your hearing to create your personalized hearing profile</p>
    //             <Button props='Learn more' className='bg-none outline  rounded-full w-[100px]' />
    //         </div>
    //     </div>
    //     <div className='items-center ml-[40%] w-[500px] h-[100%]'>
    //       <img src={Bgimg} width={350} className='bg-black' alt="" />
    //       <div className='mt-[-90%]'>
    //         <h3 className='text-white text-6xl text-left text-slim'>Play from any device</h3>
    //         <p className='text-white text-[10px] w-[70%] text-left'>Your hearing profile is stored on the earbuds, and is applied to whatever you listen to, on any device.</p>
    //         <p className='text-white text-left w-[70%] text-[10%]'>Use the Nura app to create a hearing profile, configure touch buttons, adjust immersion mode and more.</p>
    //       </div>
    //     </div>
      
    //   </div>
    // </div>
  )
}

export default ForYourEars
