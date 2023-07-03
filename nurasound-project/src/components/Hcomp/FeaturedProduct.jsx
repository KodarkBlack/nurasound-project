import React from 'react'
import Button from '../Button'
import Cards from '../Cards'

const FeaturedProduct = () => {
  return (
    <div className='bg-black/75  w-screen h-[500px] p-10'>
      <div className='inline-flex w-screen justify-between'>
        <h1 className='text-white'>Featured discounts</h1>
        <Button props='VIEW MORE DISCOUNTS' className=' text-[10px] text-white ml-[-15%]'/>
        {/* <p className='text-sm  text-white '>VIEW ALL DISCOUNTS</p> */}
      </div>
      <div className='inline-flex gap-4 mt-[4%] '>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      </div>

    </div>
  )
}

export default FeaturedProduct
