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
    // console.log("nav bar");
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [navWidth,setNavWidth]=useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        if (prevScrollPos > currentScrollPos) {
            // console.log('Scrolling up');
            setNavWidth(true);
        } else {
            setNavWidth(false);
            // console.log('Scrolling down');
        }

        setPrevScrollPos(currentScrollPos);
    };


    const { state, dispatch } = useContext(ProductCountContext);
    const [prdCount, setPrdCount] = useState(state.count);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setPrdCount(state.count);
        if (state.updateAnimation) {
            const timer = setTimeout(() => {
                dispatch('UPDATE_ANIMATION');
            }, 1000);

            return () => {clearTimeout(timer);window.removeEventListener('scroll', handleScroll);} // Clear the timer on component unmount or state change
        }
  
    }, [state])
    return (
        <div className={`fixed  left-1/2 -translate-x-1/2 w-full max-w-80 z-[498] bottom-2 transition-all duration-200 ease-in-out`}>
            <div className={`mx-2 p-2 rounded-full bg-white   overflow-hidden `}>
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
                        <div className={`w-[34px] h-[34px] rounded-full flex justify-center items-center relative ${state.updateAnimation ? 'wave' : ''} `}>
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
