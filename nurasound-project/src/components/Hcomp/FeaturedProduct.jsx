import React from 'react'
import Button from '../Button'
import Cards from '../Cards'

const FeaturedProduct = () => {
  return (
    <div className='bg-black  w-[100%] h-[500px] p-10'>
      <div className='flex w-[250%] gap-[30%]'>
        <h1 className='text-white'>Featured discounts</h1>
        <Button props='VIEW MORE DISCOUNTS' className='w-[50%] text-sm text-white' />
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
