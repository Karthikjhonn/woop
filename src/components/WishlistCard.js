import React, { useContext, useEffect, useState } from 'react'
import ProductCount from './ProductCount';
import { useNavigate } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";


function AddCarBtn({ bagBtn, id }) {
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
            {addToBag ? <button className='mt-1 h-[32px] btn-text-shadow btn-shadow bg-accent text-secondary font-normal text-[11px] px-2.5 py-1.5 rounded-xs active:bg-accent/75' onClick={checkCart}>Add to bag</button> : <ProductCount id={id} />}
        </>
    )
}

function WishlistCard({ ID, data, bagBtn, onRerender, page }) {
    const navigate = useNavigate();
    const [removeProduct, setRemoveProduct] = useState(false);

    function removedProduct(id) {
        console.log("remove from wishlist");
        if (page === "wishlistPage") {
            const allLikedProduct = JSON.parse(localStorage.getItem('likedProduct'));
            var removedProduct = allLikedProduct.filter(data => data !== id);
            localStorage.setItem('likedProduct', JSON.stringify(removedProduct))
            if (removeProduct) {
                setRemoveProduct(false);
            } else if (!removeProduct) {
                setRemoveProduct(true)
            }
        } else if (page === "cartPage") {
            const allLikedProduct = JSON.parse(localStorage.getItem('cartItems'));
            var removedProduct = allLikedProduct.filter(data => data !== id);
            localStorage.setItem('cartItems', JSON.stringify(removedProduct))
            if (removeProduct) {
                setRemoveProduct(false);
            } else if (!removeProduct) {
                setRemoveProduct(true)
            }
        }
    }
    useEffect(() => {
        onRerender();
    }, [removeProduct])

    return (
        <>
            <div className='flex gap-2 p-1.5 bg-white rounded-md shadow-md shadow-tertiary/25'>
                <div className='w-full max-w-[95px] max-h-[95px] rounded-sm overflow-hidden md:max-w-[120px] md:max-h-[120px]' onClick={()=>navigate(`/productdetail/${data.id}`)}><img src={data.image} className='rounded-sm w-full h-full object-center  object-contain' /></div>
                <div className='w-full border-l-[.2px] border-tertiary ps-2'>
                    <div className='flex gap-2 items-start justify-between'>
                        <div>
                            <h1 className='font-medium text-secondary text-lg'>$ {data.price}</h1>
                            <p className='h-8 text-xs overflow-hidden '>{data.title}</p>
                        </div>
                        <div onClick={() => removedProduct(data.id)}><IoIosClose className='text-lg' /></div>
                    </div>
                    <AddCarBtn bagBtn={bagBtn} id={data.id} />
                </div>
            </div>
        </>
    )
}

export default WishlistCard
