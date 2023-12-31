import React from 'react'

function BlogCard() {
  return (
    <div className='p-2 rounded-xl bg-white'>
      <div className='rounded-tr-lg rounded-tl-lg'>
        <img src='https://cdn.pixabay.com/photo/2017/12/18/18/38/christmas-3026688_1280.jpg' className='w-full object-cover rounded-tr-lg rounded-tl-lg' />
      </div>
      <div className='mt-2 flex flex-col gap-2'>
        <h1 className='text-secondary'>Free shipping on all orders</h1>
        <p className='text-xs text-tertiary font-light max-w-4col overflow-hidden text-ellipsis'>The GarmentsMembership component renders a section with a heading, introductory text, and information about membership benefits. It includes a list of membership benefits and information on how to join the membership program.</p>
      </div>
    </div>
  )
}

export default BlogCard
