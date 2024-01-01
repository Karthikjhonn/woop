import React, { useContext, useState } from 'react'
import { ProductCountContext } from '../App';

function ProductCount() {
  const { state, dispatch } = useContext(ProductCountContext);
  const [prdCount, setProdCount] = useState(0);

  function increment() {
    if (prdCount < 10) {
      dispatch('INCREMENT');
      setProdCount(prdCount + 1);
    }
  }
  function decrement() {
    if (prdCount > 0) {
      dispatch('DECREMENT');
      setProdCount(prdCount - 1);
    }
  }

  return (
    <div>
      {/* {addToBag?<div className='inline-flex items-center text-base font-medium text-secondary btn-shadow rounded-sm  mt-1'><button className='w-[26px] h-[32px] flex justify-center items-center active:bg-accent/75 bg-accent rounded-l-sm btn-text-shadow' onClick={decrement}>-</button><button className='w-[26px] h-[32px] flex justify-center items-center select-none bg-accent btn-text-shadow'>{prdCount}</button><button className='w-[26px] h-[32px] flex justify-center items-center active:bg-accent/75 bg-accent rounded-r-sm btn-text-shadow' onClick={increment}>+</button></div>:
      <button className='mt-1 h-[32px] btn-text-shadow btn-shadow bg-accent text-secondary font-normal text-[11px] px-2.5 py-1.5 rounded-xs active:bg-accent/75' onClick={checkCart}>Add to bag</button>}  */}
      <div className='inline-flex items-center text-base font-medium text-secondary btn-shadow rounded-sm  mt-1'><button className='w-[26px] h-[32px] flex justify-center items-center active:bg-accent/75 bg-accent rounded-l-sm btn-text-shadow' onClick={decrement}>-</button><button className='w-[26px] h-[32px] flex justify-center items-center select-none bg-accent btn-text-shadow'>{prdCount}</button><button className='w-[26px] h-[32px] flex justify-center items-center active:bg-accent/75 bg-accent rounded-r-sm btn-text-shadow' onClick={increment}>+</button></div>
    </div>
  )
}

export default ProductCount
