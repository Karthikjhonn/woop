import React from 'react'
import BottomNavbar from '../components/BottomNavbar'
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { PiCopyright } from "react-icons/pi";

function Profile() {
  return (
    <>
      <div className=' bg-gradient-to-t from-secondary from-20% to-black  px-4 py-10 flex items-center justify-between'>
        <div className='flex gap-2 items-center text-white'>
          <div className='w-12 h-12 rounded-full bg-black'><img src="https://cdn.pixabay.com/photo/2017/11/02/14/26/model-2911329_640.jpg" class="w-full h-full object-cover rounded-full" /></div>
          <h1 className='font-medium'>John</h1>
        </div>
        <button className='px-2 py-1.5 rounded-xs text-primary border font-light border-slate-200  text-xs'>sign out</button>
      </div>
      <div className='relative px-4 -top-4'>
        <div className='bg-white rounded-md drop-shadow-md p-4 py-9 grid grid-cols-2 gap-4'>
          <button className='text-sm font-light text-secondary border border-gray-300 rounded-sm p-2'>My orders</button>
          <button className='text-sm font-light text-secondary border border-gray-300 rounded-sm p-2'>Account</button>
          <button className='text-sm font-light text-secondary border border-gray-300 rounded-sm p-2'>Coupon</button>
          <button className='text-sm font-light text-secondary border border-gray-300 rounded-sm p-2'>Track order</button>
        </div>
      </div>

      <div className='mt-6 p-4 bg-white flex justify-between items-center gap-1 border-b border-gray-300'>
        <div className='flex gap-2 items-center'>
          < FaHeart className='text-lg text-accent' />
          <p className='text-secondary text-sm leading-none'>Wishlist</p>
        </div>
        < IoIosArrowDropright />
      </div>
      <div className='p-4 bg-white flex justify-between items-center gap-1 border-b border-gray-300'>
        <div className='flex gap-2 items-center'>
          < MdOutlineNotificationsActive className='text-lg text-secondary' />
          <p className='text-secondary text-sm leading-none'>Notification</p>
        </div>
        < IoIosArrowDropright />
      </div>
      <div className='p-4 bg-white flex justify-between items-center gap-1 border-b border-gray-300'>
        <div className='flex gap-2 items-center'>
          < FaHandsHelping className='text-lg text-secondary' />
          <p className='text-secondary text-sm leading-none'>Help center</p>
        </div>
        < IoIosArrowDropright />
      </div>

      <div className='px-4 mt-4 py-2 bg-white flex justify-between items-center gap-1 '>
        <div className='flex gap-2 items-center'>
          < MdOutlineQrCodeScanner className='text-2xl' />
          <p className='text-secondary text-sm leading-none'>Scan here for Voucher <br /> & Gift cards</p>
        </div>
        < IoIosArrowDropright />
      </div>

      <div className='mt-4 p-4 bg-white flex justify-between items-center gap-1 border-b border-gray-300'>
        <div className='flex gap-2 items-center'>
          <p className='text-secondary text-sm leading-none'>Return & Refund policy</p>
        </div>
        < IoIosArrowDropright />
      </div>
      <div className='p-4 bg-white flex justify-between items-center gap-1 border-b border-gray-300'>
        <div className='flex gap-2 items-center'>
          <p className='text-secondary text-sm leading-none'>Terms & Condition</p>
        </div>
        < IoIosArrowDropright />
      </div>
      <div className='mt-4 mb-6 text-[10px] font-medium text-center'>version 11.45 <PiCopyright className='inline-block' /> </div>
      <div className='my-16'></div>


      <BottomNavbar />
    </>
  )
}

export default Profile
