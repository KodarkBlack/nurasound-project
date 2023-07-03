import React from 'react'
import Logo from '../assets/twentyfive.png'

const Footer = () => {
  return (
    <div className='w-screen h-[500px] bg-black items-center'>
      {/* Footer content */}
      <footer className='flex text-white'>
        <ul>
          <img src={Logo} alt="" />
          <p>Nura designs headphones tuned to you. <br /> Bringing you closer to music with personalized sound.</p>
        </ul>

        <ul>
          <p>SHOP</p>
          <li>NuraTrue Pro</li>
          <li>Audio Transmitter</li>
          <li>NuraTrue</li>
          <li>NuraBuds</li>
          <li>Nuraphone</li>
          <li>NuraLoop</li>
          <li>Accessories</li>
          <li>Subscription</li>
        </ul>

        <ul>
          <p>INFO</p>
          <li>NuraTrue Pro</li>
          <li>Audio Transmitter</li>
          <li>NuraTrue</li>
          <li>NuraBuds</li>
          <li>Nuraphone</li>
        </ul>

        <ul>
          <p>SUPPORT</p>
          <li>NuraTrue Pro</li>
          <li>Audio Transmitter</li>
        </ul>

        <ul>
          <p>SHOP</p>
          <li>NuraTrue Pro</li>
          <li>Audio Transmitter</li>
          <li>NuraTrue</li>
          <li>NuraBuds</li>
          <li>Nuraphone</li>
          <li>NuraLoop</li>
          <li>Accessories</li>
          <li>Subscription</li>
        </ul>


      </footer>
      <div className='flex text-white justify-between'>
          <p>Copyright © 2022 Nura Operations Pty Ltd. All rights reserved.</p>
          <p>Copyright © 2022 Nura Operations Pty Ltd. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
