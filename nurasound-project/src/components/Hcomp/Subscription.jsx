import React from 'react'
import Youtube from '../../assets/youtubebg.png'
import Button from '../Button'
import YoutubeLogo from '../../assets/youtubelogo.png'

const Subscription = () => {
  return (

    <div id='main' className='w-full h-[1200px] bg-black'>
        <img 
           className='w-full h-[500px] object-cover'
          src={Youtube} alt=""
        />
        <div className='absolute w-full h-[500px] top-0 left-0 mt-[15%]'>
            <div className=''>
                <h3 className='text-white text-5xl w-[100%] font-thin'>A sound subscription</h3>
                <p className='text-white text-[15px] w-[100%] font-thin '>Experience personalized sound across our devices on a <br /> low monthly fee with NuraNow. Cancel anytime.</p>
                <Button props='DISCOVER NURANOW' className='bg-blue-700 rounded-full w-[20%] h-10 shadow text-white mt-8' />
            </div>
        </div>

        <div className='w-[93%] h-[600px] m-10 bg-white'>
            <img src={YoutubeLogo} alt="" />
        </div>
    </div>
    // <div className=''>
    //   {/* <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={Youtube} alt="" /> */}
    //   <div className='bg-black w-full h-screen absolute'>
    //     <h3 className='text-white-100 text-4xl '>A sound subscription</h3>
    //     <p className=''>Experience personalized sound across our devices on a low monthly fee with NuraNow. Cancel anytime.</p>
    //     <Button props='DISCOVER NURANOW' className='bg-blue-500 rounded-full w-[20%] h-8 shadow' />
      
    //   </div>
    // </div>
  )
}

export default Subscription
