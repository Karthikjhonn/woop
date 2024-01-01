import React from 'react'
import { BsStars } from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";

function Membership() {
    window.scroll({
        top:0,
    })
    return (
        <>
            <div className='pt-8 relative'>
                <div className='w-full absolute top-0 left-0 h-full bg-secondary -z-10'></div>
                <div className='px-4 flex justify-center items-center flex-col ga1.5 text-center text-white relative'>
                    <BsStars className='text-yellow-400 text-2xl' />
                    <h1 className='text-2xl font-medium text-white text-center mt-2'> Get more with <span className='bg-gradient-to-t from-yellow-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent block'>GoldRx Gold</span></h1>
                    <p className='mt-2 text-sm font-light mx-w-sm mx-auto'>Members may receive exclusive discounts or promotions on regular priced and sale items.</p>
                    <div className='w-full absolute top-1/2 left-0 h-full bg-secondary rounded-[50%] z-[-1]'></div>
                </div>
            </div>
            <div className='px-4 mt-4'>
                <div className=' bg-white p-4 rounded-md text-secondary drop-shadow-md max-w-sm mx-auto'>
                    <p className='text-center text-sm font-medium'>Members benefits</p>
                    <div className='text-xs font-normal text-secondary space-y-1'>
                        <div className='flex items-center justify-between gap-2 border-b border-gray-200/75 py-2'>
                            <p>Early access to new collections or product launches.</p>
                            <FaCircleCheck className='text-2xl text-yellow-400 min-w-7' />
                        </div>
                        <div className='flex items-center justify-between gap-2 border-b border-gray-200/75 py-2'>
                            <p>Priority access to limited edition or special items.</p>
                            <FaCircleCheck className='text-2xl text-yellow-400 min-w-7' />
                        </div>
                        <div className='flex items-center justify-between gap-2 border-b border-gray-200/75 py-2'>
                            <p>Exclusive access to sales before they are open to the general public.</p>
                            <FaCircleCheck className='text-2xl text-yellow-400 min-w-7' />
                        </div>
                        <div className='flex items-center justify-between gap-2 py-2'>
                            <p>Special discounts or freebies for members on their birthdays.</p>
                            <FaCircleCheck className='text-2xl text-yellow-400 min-w-7' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-6'>
                <div className='px-4'>
                    <small className='block my-1 text-[11px] text-center'>it's advisable to review the terms and conditions.</small>
                    <div className='flex justify-center items-center'>
                        <button className='bg-yellow-200 text-secondary max-w-4col mx-auto w-full rounded-xs px-2 py-2 text-sm font-medium'>Start your free trail now !</button>
                    </div>
                    <small className='block my-2 text-[11px] text-center' onClick={()=>window.history.back()}>No Thanks</small>
                </div>
            </div>
        </>
    )
}

export default Membership
