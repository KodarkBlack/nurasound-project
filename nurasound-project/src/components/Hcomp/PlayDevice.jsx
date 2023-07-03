import React from 'react'
import Background from '../../assets/bgimg.png'

const PlayDevice = () => {
  return (
    <div className='w-screen h-[500px] mb-0' >
      <img className='ml-[35%] absolute' width={400} src={Background} alt="" />
      <div className='w-screen bg-black/75 h-[500px] p-[7%]'>
        <div className='absolute ml-[50%] w-screen'>
            <h3 className='text-white w-[20%] text-left text-[50px]'>Play from any device.</h3>
            <p className='text-[20px] w-[25%] text-left text-white mb-5'>Your hearing profile is stored on the earbuds, and is applied to whenever you listen to, on any device.</p>
            <p className='text-[20px] w-[25%] text-left text-white'>Use the Nura app to create a hearing profile, configure touch buttons, adjust immersion mode and more.</p>
        </div>
        {/* <div className=''>
           <h3 className='text-white text-6xl text-left text-slim'>Play from any device</h3>
           <p className='text-white text-[10px] w-[70%] text-left'>Your hearing profile is stored on the earbuds, and is applied to whatever you listen to, on any device.</p>
           <p className='text-white text-left w-[70%] text-[10%]'>Use the Nura app to create a hearing profile, configure touch buttons, adjust immersion mode and more.</p>
        </div> */}
      </div>
    </div>
  )
}

export default PlayDevice
