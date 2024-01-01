import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import ProductCount from './ProductCount';
import { ProductCountContext } from '../App';


function AddCarBtn({bagBtn}) {
    const [addToBag, setAddToBag] = useState(bagBtn);
    function checkCart() {
        if (addToBag) {
            setAddToBag(false);
        } else if (!addToBag) {
            setAddToBag(true);
        }
    }
    return (
        <>
            {addToBag ?<button className='mt-1 h-[32px] btn-text-shadow btn-shadow bg-accent text-secondary font-normal text-[11px] px-2.5 py-1.5 rounded-xs active:bg-accent/75' onClick={checkCart}>Add to bag</button>:<ProductCount />}
        </>
    )
}

function WishlistCard({ ID, data, bagBtn }) {
    console.log('wishlist card');
    console.log(data);


    function removedProduct(id) {
        console.log("remove from wishlist");
        const allLikedProduct = JSON.parse(localStorage.getItem('likedProduct'));
        var removedProduct = allLikedProduct.filter(data => data !== id);
        localStorage.setItem('likedProduct', JSON.stringify(removedProduct))
        console.log(JSON.parse(localStorage.getItem('likedProduct')));
    }
    return (
        <>
            <div className='flex gap-2 p-1.5 bg-white rounded-md shadow-md shadow-tertiary/25'>
                <div className='w-full max-w-[95px] max-h-[95px] rounded-sm overflow-hidden md:max-w-[120px] md:max-h-[120px]'><img src={data.image} className='rounded-sm w-full h-full object-center  object-contain' /></div>
                <div className='w-full border-l-[.2px] border-tertiary ps-2'>
                    <div className='flex gap-2 items-start justify-between'>
                        <div>
                            <h1 className='font-medium text-secondary text-lg'>$ {data.price}</h1>
                            <p className='h-8 text-xs overflow-hidden '>{data.title}</p>
                        </div>
                        <div onClick={() => removedProduct(data.id)}><AiOutlineCloseCircle className='text-lg' /></div>
                    </div>
                    {/* <ProductCount  /> */}
                    {/* {addToBag ? <ProductCount /> : <button className='mt-1 h-[32px] btn-text-shadow btn-shadow bg-accent text-secondary font-normal text-[11px] px-2.5 py-1.5 rounded-xs active:bg-accent/75' onClick={checkCart}>Add to bag</button>} */}
                    <AddCarBtn bagBtn={bagBtn} />
                </div>
            </div>
        </>
    )
}

export default WishlistCard
