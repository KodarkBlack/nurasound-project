import React from 'react'
import Phones from '../../assets/phone.png'
import Button from '../Button'
import Bgimg from '../../assets/bgimg.png'

const ForYourEars = () => {
  return (
    <div className='w-100 lg:h-[600px] md:h-inherit bg-blue-500 '>
      <div className='justify-center  lg:flex md:block'>
        <img src={Phones} width={450} className='' alt="" />
        <div className='mt-[10%] text-left ml-10'>
          <h3 className='text-white w-[30%] text-[50px]'>For your ears only</h3>
          <p className='w-[50%] text-[20px] text-white'>Normal hearing varies significantly from person to person, and these variations make a big difference to how you experience music </p>
          <p className='w-[50%] text-[20px] text-white'>The first time you use Nura earBuds, they measure your hearing to create your personalized hearing profile</p>
          <Button props='Learn more' className='flex p-2 justify-between text-white' />
        </div>
      </div>
    </div>
  )
}

export default ForYourEars
