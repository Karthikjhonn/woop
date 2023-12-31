import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { ProductCountContext } from '../App';


function BottomNavbar() {
    const { count, dispatch } = useContext(ProductCountContext);
    const [prdCount,setPrdCount]=useState(count);
    const[cartUpdateAnimation,setCartUpdateAnimation]=useState(false);
    useEffect(()=>{
        setPrdCount(count);
        setCartUpdateAnimation(true);
        setTimeout(()=>setCartUpdateAnimation(false),1000)
    },[count])
    return (
        <div className='fixed bottom-2 left-1/2 -translate-x-1/2 w-full max-w-80 z-[498]'>
            <div className='mx-2 p-2 rounded-full bg-white'>
                <div className='flex items-center justify-between Nav-link'>
                    <NavLink to="/" className="homeLink">
                        <div className='w-[34px] h-[34px] rounded-full flex justify-center items-center relative'>
                            <img src={require("../asset/images/logo.png")} className='object-contain w-full max-w-5' />
                            <div className='smallTriangle  bg-secondary '></div>
                        </div>
                    </NavLink>
                    <NavLink to="/categories" className="categoriesLink">
                        <div className='w-[34px] h-[34px] rounded-full flex justify-center items-center'>
                            <MdOutlineShoppingBag className='text-lg outline-icon' />
                            <MdShoppingBag className='text-lg solid-icon' />
                        </div>
                    </NavLink>
                    <NavLink to="/cart" className="cartLink">
                        <div className={`w-[34px] h-[34px] rounded-full flex justify-center items-center relative ${cartUpdateAnimation?'test':''}`}>
                            <HiOutlineShoppingCart className='text-lg outline-icon' />
                            <HiShoppingCart className='text-lg solid-icon' />
                            <div className="p-1 w-3.5 h-3.5 rounded-full bg-secondary text-white text-[8px] font-medium flex justify-center items-center absolute -top-1.5 left-1/2 -translate-x-1/2">{prdCount}</div>
                        </div>
                    </NavLink>
                    <NavLink to="/wishlist" className="wishlistLink">
                        <div className='w-[34px] h-[34px] rounded-full flex justify-center items-center'>
                            <FaRegHeart className='text-lg outline-icon' />
                            <FaHeart className='text-lg solid-icon text-secondaryAccent' />
                        </div>
                    </NavLink>
                    <NavLink to="/profile" className="profileLink">
                        <div className='w-[34px] h-[34px] rounded-full flex justify-center items-center'>
                            <img src='https://cdn.pixabay.com/photo/2017/11/02/14/26/model-2911329_640.jpg' className='w-full h-full object-cover rounded-full' />
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default BottomNavbar
