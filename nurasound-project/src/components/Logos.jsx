import React from 'react'
import Forbes from '../assets/logos/30under30.png'
import Wired from '../assets/logos/dwired.png'
import Techradar from '../assets/logos/techradars.png'
import Techcrunch from '../assets/logos/techcrunch.png'
import Pitchfork from '../assets/logos/pitchfork.png'
import Rollingstone from '../assets/logos/rollings.png'


const Logos = () => {
  return (
    <div className='w-full h-[550px] bg-black/50 p-8'>
      <div className=''>
        <p>AS FEATURED IN</p>
        <div className='flex w-[15%] ml-6'>
            <img src={Forbes} alt="" />
            <img src={Wired} alt="" />
            <img src={Techradar} alt="" />
            <img src={Techcrunch} alt="" />
            <img src={Pitchfork} alt="" />
            <img src={Rollingstone} alt="" />
        </div>

        <div className='flex w-[15%] ml-6'>
            <img src={Forbes} alt="" />
            <img src={Wired} alt="" />
            <img src={Techradar} alt="" />
            <img src={Techcrunch} alt="" />
            <img src={Pitchfork} alt="" />
            <img src={Rollingstone} alt="" />
        </div>

        <div className='flex w-[15%] ml-6'>
            <img src={Forbes} alt="" />
            <img src={Wired} alt="" />
            <img src={Techradar} alt="" />
            <img src={Techcrunch} alt="" />
            <img src={Pitchfork} alt="" />
            <img src={Rollingstone} alt="" />
        </div>

        <div className='flex w-[15%] ml-[16%]'>
            <img src={Forbes} alt="" />
            <img src={Wired} alt="" />
            <img src={Techradar} alt="" />
            <img src={Techcrunch} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Logos
