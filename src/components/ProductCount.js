import React, { useContext, useEffect, useState } from 'react'
import { CountContext } from '../context/ProductCountContext';

function ProductCount({ id }) {
  console.log("product count component", id);
  const { state, dispatch } = useContext(CountContext);
  const [prdCount, setProdCount] = useState(0);

function setPrdCount(){
  var itemCount = {
    id: id,
    count: prdCount
  }
  const allItem = JSON.parse(localStorage.getItem('productcount'));
  
  if(allItem.length == 0){
    console.log(id);
    allItem.push(itemCount);
    localStorage.setItem('productcount', JSON.stringify(allItem));
  }else{
    allItem.push(itemCount);
    localStorage.setItem('productcount', JSON.stringify(allItem));
  }

  

}

  useEffect(() => {
    console.count("use effect");
    if (!localStorage.getItem('productcount')) {
      localStorage.setItem('productcount', '[]');
    }
    
  }, [])


  function increment(prdID) {
    console.log(prdID)

    if (prdCount < 10) {
      dispatch('INCREMENT');
      const allProductArray = JSON.parse(localStorage.getItem('productcount'));
      console.log(allProductArray);
      allProductArray.map((item, index) => {
        if (item.id == prdID) {
          console.log(item, index);
          allProductArray[index].count = prdCount + 1
          localStorage.setItem('productcount', JSON.stringify(allProductArray))
        }
      })
      setProdCount(prdCount + 1);
    }
  }
  function decrement(prdID) {
    console.log(prdID)
    const itemCount = {
      id: prdID,
      count: prdCount - 1
    }
    if (prdCount > 0) {
      dispatch('DECREMENT');
      // localStorage.setItem('productcount',JSON.stringify(itemCount));
      // const singlePrdCount = JSON.parse(localStorage.getItem('productcount'));
      const allProductArray = JSON.parse(localStorage.getItem('productcount'));
      console.log(allProductArray);
      allProductArray.map((item, index) => {
        if (item.id == prdID) {
          console.log(item, index);
          allProductArray[index].count = prdCount - 1
          localStorage.setItem('productcount', JSON.stringify(allProductArray))
        }
      })
      setProdCount(prdCount - 1);
    }
  }

  return (
    <div>
      {/* {addToBag?<div className='inline-flex items-center text-base font-medium text-secondary btn-shadow rounded-sm  mt-1'><button className='w-[26px] h-[32px] flex justify-center items-center active:bg-accent/75 bg-accent rounded-l-sm btn-text-shadow' onClick={decrement}>-</button><button className='w-[26px] h-[32px] flex justify-center items-center select-none bg-accent btn-text-shadow'>{prdCount}</button><button className='w-[26px] h-[32px] flex justify-center items-center active:bg-accent/75 bg-accent rounded-r-sm btn-text-shadow' onClick={increment}>+</button></div>:
      <button className='mt-1 h-[32px] btn-text-shadow btn-shadow bg-accent text-secondary font-normal text-[11px] px-2.5 py-1.5 rounded-xs active:bg-accent/75' onClick={checkCart}>Add to bag</button>}  */}
      <div className='inline-flex items-center text-base font-medium text-secondary btn-shadow rounded-sm  mt-1'><button className='w-[26px] h-[32px] flex justify-center items-center active:bg-accent/75 bg-accent rounded-l-sm btn-text-shadow' onClick={(e) => decrement(id)}>-</button><button className='w-[26px] h-[32px] flex justify-center items-center select-none bg-accent btn-text-shadow'>{prdCount}</button><button className='w-[26px] h-[32px] flex justify-center items-center active:bg-accent/75 bg-accent rounded-r-sm btn-text-shadow' onClick={(e) => increment(id)}>+</button></div>
    </div>
  )
}

export default ProductCount
