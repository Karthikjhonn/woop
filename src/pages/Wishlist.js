import React, { useEffect, useState } from 'react'
import BottomNavbar from '../components/BottomNavbar'
import WishlistCard from '../components/WishlistCard';
import { useNavigate } from 'react-router-dom';

function Wishlist() {
    window.scroll({
        top: 0,
    })
    const navigate = useNavigate();
    let wishlistProduct;
    const likedProduct = JSON.parse(localStorage.getItem('likedProduct'));
    console.log(likedProduct);
    console.count("wishlist component");
    const URL = "https://fakestoreapi.com/products";
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [parentState, setParentState] = useState(true);

    const handleChildRerender = () => {
        if (parentState) {
            setParentState(false);
        } else if (!parentState) {
            setParentState(true);
        }
    };
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
        setTimeout(() => fetchData(), 2000)
    }, []);

    if (likedProduct == null || likedProduct == "") {
        wishlistProduct = <div className='w-full min-h-64 flex flex-col justify-center items-center'>
            <img src={require('../asset/images/icons/wishlistcard.png')} className='object-contain' />
            <p className='text-base text-tertiary font-normal text-center  mt-6'>Seems Your wishlist is currently empty.
                Add items to your wishlist to save them for later!</p>
        </div>
    } else {
        if (loading) {
            wishlistProduct = <><div className='w-full h-28 rounded-sm bg-bg-tab animate-pulse'></div><div className='w-full h-28 rounded-sm bg-bg-tab animate-pulse'></div><div className='w-full h-28 rounded-sm bg-bg-tab animate-pulse'></div><div className='w-full h-28 rounded-sm bg-bg-tab animate-pulse'></div></>
        } else if (!loading) {
            wishlistProduct = likedProduct.map((id, i) => {
                return <WishlistCard key={i} ID={id} data={data[id - 1]} bagBtn={true} page={'wishlistPage'} onRerender={handleChildRerender} />
            })
        }

    }





    return (
        <div className='px-4 mt-6'>
            <h1 className='text-lg text-secondary font-medium mt-6 py-1.5 sticky top-0 bg-primary'>Wishlist</h1>
            <div className='grid grid-flow-row gap-2 mt-6 md:grid-cols-2 md:gap-4 lg:grid-cols-3'>
                {wishlistProduct}
            </div>
            <BottomNavbar />
        </div>
    )
}

export default Wishlist
