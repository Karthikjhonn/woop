import React, { useEffect, useState } from 'react'
import BottomNavbar from '../components/BottomNavbar'
import { useNavigate } from 'react-router-dom';
import WishlistCard from '../components/WishlistCard';

function Cart() {
  const navigate = useNavigate();
  let cartItems;
  window.scroll({
    top:0,
  })
  const likedProduct = JSON.parse(localStorage.getItem('likedProduct'));
  const URL = "https://fakestoreapi.com/products";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    setTimeout(() => fetchData(), 500)
  }, []);

  if (likedProduct == null || likedProduct == "") {
    cartItems = <div className='w-full min-h-64 flex flex-col justify-center items-center'>
      <img src={require('../asset/images/icons/surprised.png')} className='object-contain' />
      <p className='text-xs text-secondary font-light text-center  mt-6'>Seems your wishlist items is empty <br /> Explore all product <span onClick={() => navigate('/categories')} className='underline active:text-blue-500'>here</span></p>
    </div>
  } else {
    if (loading) {
      cartItems = <><div className='w-full h-28 rounded-sm bg-bg-tab animate-pulse'></div><div className='w-full h-28 rounded-sm bg-bg-tab animate-pulse'></div><div className='w-full h-28 rounded-sm bg-bg-tab animate-pulse'></div><div className='w-full h-28 rounded-sm bg-bg-tab animate-pulse'></div></>
    } else if (!loading) {
      cartItems = likedProduct.map((id, i) => {
        return <WishlistCard key={i} ID={id} data={data[id - 1]} bagBtn={false}/>
      })
    }

  }

  return (
    <div className='mt-6'>
      <h1 className='text-lg text-secondary font-medium mt-6 py-1.5 sticky top-0 bg-primary px-4'>Cart</h1>
      <div className=' px-4 grid grid-flow-row gap-2 mt-6 md:grid-cols-2 md:gap-4 lg:grid-cols-3'>
        {cartItems}
      </div>
      <BottomNavbar />
    </div>
  )
}

export default Cart
