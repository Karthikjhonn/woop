import React, { useEffect, useState } from 'react'
import { TiStarFullOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link, NavLink, json } from 'react-router-dom';

function WishList({ id }) {
    // console.log(id);
    const [wishState, setWishState] = useState(false);
    const likedProduct = JSON.parse(localStorage.getItem('likedProduct'));
    useEffect(() => {
        if (localStorage.getItem('likedProduct') == null) {
            localStorage.setItem('likedProduct', '[]');
            console.log("array created");
        }
        if (likedProduct != null) {
            likedProduct.map((ID) => {
                if (ID == id) {
                    // wishlistAdd();
                    setWishState(true)
                }
            })
        }
    }, [])
    function wishlistAdd(id) {
        if (wishState) {
            const allLikedProduct = JSON.parse(localStorage.getItem('likedProduct'));
           var removedProduct= allLikedProduct.filter(data => data !== id);
           localStorage.setItem('likedProduct',JSON.stringify(removedProduct))
            setWishState(false);
        } else if (!wishState) {
            const otherLikedProduct = JSON.parse(localStorage.getItem('likedProduct'));
            otherLikedProduct.push(id)
            localStorage.setItem('likedProduct', JSON.stringify(otherLikedProduct));
            setWishState(true);
        }
    }
    return (
        <button onClick={() => wishlistAdd(id)} className='w-[26px] h-[26px] active:bg-accent/25 bg-white/75 rounded-full p-[3px] absolute z-50 top-3 right-3 flex justify-center items-center active:scale-110 transition-transform duration-150 ease-in-out hover:bg-accent/25'>{wishState ? <FaHeart className='text-accent' /> : <FaRegHeart className='text-secondaryAccent ' />}</button>
    )
}

function Card({ details, productID }) {
    const productName = details.title
    const imgSrc = details.image
    let starRate;
    if (details.rating == null) {
        starRate = '4.5'
    } else {
        starRate = details.rating.rate
    }
    const productPrice = details.price
    return (
        <>
            <div className='max-w-[280px] w-full p-2 rounded-xl bg-white  relative '>
                <Link to={`/productdetail/${productID}`}>
                    <div className='inline-flex flex-col gap-1'>
                        <div className='w-full  bg-slate-200 rounded-lg relative'>
                            <img src={imgSrc ? imgSrc : require("../asset/images/productsimage/prdimg1.png")} className='w-full object-cover aspect-square rounded-lg' />
                            {starRate > 4 ? <div className='absolute top-4 left-0 bg-accent/25 capitalize text-white text-[8px] font-light px-1 py-0.5 md:text-base md:px-2'>trending</div> : <> </>}
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='text-sm text-secondary capitalize font-light max-w-20 text-ellipsis overflow-hidden whitespace-nowrap md:max-w-44'>{productName ? productName : "test content"}</p>
                            <div className='flex items-center gap-1'>
                                <TiStarFullOutline className='text-yellow-400' />
                                <p className='text-[10px] font-medium text-tertiary'>{starRate ? starRate : "4.5"}</p>
                            </div>
                        </div>
                        <p className='text-center text-sm font-medium text-black md:text-base'> $ {productPrice ? productPrice : "14.36"}</p>
                    </div>
                </Link>
                <WishList id={productID} />
            </div>
        </>
    )
}


Card.defaultProps = {
    productName: "test content",
    imgSrc: "../asset/images/productsimage/prdimg1.png",
    starRate: '4.5',
    productPrice: '45.3'
}
export default Card
