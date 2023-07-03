import React from 'react'
import ListLine from '../ListLine'
import NuraLogo from '../../assets/logos/nuralogo.svg'

const Navbar = () => {
  return (
    <nav className='flex  justify-between m-4 mt-[-1%]'>
      <img src={NuraLogo} alt="" />
      <ListLine />
      <div className='text-white font-bold'>Cart (0)</div>
    </nav>
  )
}

export default Navbar
