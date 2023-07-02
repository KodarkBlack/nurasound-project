import React from 'react'
import ListLine from '../ListLine'

const Navbar = () => {
  return (
    <nav className='flex  justify-between'>
      <div className=''>LOGO</div>
      <ListLine />

      <div>Cart (0)</div>
    </nav>
  )
}

export default Navbar
