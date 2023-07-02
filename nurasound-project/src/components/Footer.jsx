import React from 'react'
import Logo from '../assets/twentyfive.png'

const Footer = () => {
  return (
    <div className='w-[30%] h-[500px] flex bg-black '>
      {/* Footer content */}
      <div>
        <img src={Logo} width={500} alt="" />
      </div>
    </div>
  )
}

export default Footer
