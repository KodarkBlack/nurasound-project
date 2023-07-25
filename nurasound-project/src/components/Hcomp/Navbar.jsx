import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import ListLine from '../ListLine'
import NuraLogo from '../../assets/logos/nuralogo.svg'

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(0);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

  return (
    <nav className='px-3 md:px-16 py-6 kflex text-white text-2xl'>
        <div className='lg:hidden relative'>
            <button className='dropdown-button' onClick={toggleDropdown}>
                <AiOutlineMenu />
            </button>

            <ListLine
            className={`dropdown-menu ${
            isDropdownOpen ? "flex" : "hidden"
            } flex-col gap-5 absolute bg-nGrey rounded-2xl px-3 py-2`}
           />
        </div>
        <div className='kflex gap-4 lg:gap-[39.8px]'>
            <img 
               src={NuraLogo} 
               alt={NuraLogo}
               className='h-[22.203px]' 
            />

            <ListLine className='hidden lg:kflex gap-[39.8px]' />
        </div>

        <div className='flex gap-2'>
            <span>Cart</span>
            <span className='font-inter text-base align-top'>(0)</span>
        </div>
    </nav>
  )
}

export default Navbar