import React, { useEffect, useState } from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { IoIosTrendingUp } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { useParams } from 'react-router-dom';

function WishList() {
  const [wishState, setWishState] = useState(false);
  function wishlistAdd() {
    if (wishState) {
      setWishState(false);
    } else if (!wishState) {
      setWishState(true);
    }
  }
  return (
    <div onClick={wishlistAdd} className='active:bg-accent/25 active:scale-110 transition-transform duration-150 ease-in-out w-[34px] h-[34px] rounded-full bg-white/[0.7] inline-flex justify-center items-center'>{wishState ? <FaHeart className='text-lg text-secondaryAccent' /> : <FaRegHeart className='text-lg text-secondaryAccent' />}</div>
  )
}

function ProductPopup() {
  const [colorAndSize, setColorAndSize] = useState(false);
  const [information, setInformation] = useState(false);
  const [description, setDescription] = useState(false);
  function handelPopup(prop) {
    switch (prop) {
      case "colorandsize":
        setColorAndSize(true);
        break;
      case "information":
        setInformation(true);
        break;
      case "description":
        setDescription(true);
        break;
    }

  }
  function handelPopupClose() {
    if (colorAndSize) {
      setColorAndSize(false);
    }
    if (information) {
      setInformation(false);
    }
    if (description) {
      setDescription(false);
    }
  }
  let productInformationList;
  const productItemList = [
    { color: 'black' },
    { height: '78 cm' },
    { width: '45 CM' },
    { weight: '106 g' },
  ]


  productInformationList = productItemList.map((data, i) => {
    return (
      <div key={i} className='flex justify-between items-center capitalize'><p className='text-secondary'>{data.color ? 'color' : data.height ? 'height' : data.width ? data.width : data.weight ? data.weight : ''} : </p><p className='text-tertiary'>{data.color ? data.color : data.height ? data.height : data.width ? data.width : data.weight ? data.weight : ''}</p></div>
    )
  })

  return (
    <>
      {/* size , description,colors */}
      <div className='mt-7'>
        <div onClick={() => handelPopup('colorandsize')} className='mt-1 px-4 py-4 bg-white font-light text-xs capitalize text-secondary flex items-center justify-between'>
          <p>color & size</p>
          <MdKeyboardArrowRight className='text-lg' />
        </div>
        <div onClick={() => handelPopup('information')} className='mt-1 px-4 py-4 bg-white font-light text-xs capitalize text-secondary flex items-center justify-between'>
          <p>product information </p>
          <MdKeyboardArrowRight className='text-lg' />
        </div>
        <div onClick={() => handelPopup('description')} className='mt-1 px-4 py-4 bg-white font-light text-xs capitalize text-secondary flex items-center justify-between'>
          <p>description </p>
          <MdKeyboardArrowRight className='text-lg' />
        </div>
      </div>
      <div onClick={handelPopupClose} className={`bg-black/25 w-full h-svh fixed top-0 left-0 ${colorAndSize ? 'block' : information ? 'block' : description ? 'block' : 'hidden'}`}>
        <div className='bg-white w-full pb-10 pt-1 px-4 bottom-0 absolute max-h-[75vh] overflow-y-scroll'>
          <div className='bg-black w-16 h-1 rounded-full mx-auto'></div>
          <div className='mt-4 sticky top-0'>
            <div onClick={handelPopupClose} className='my-1 rounded-full active:bg-halfWhite w-[34px] h-[34px] flex justify-center items-center'><FiX className='text-lg m-auto' /></div>
            <h1 className='text-xl font-medium text-[#212121] mt-4 capitalize'>{colorAndSize ? 'color & size' : information ? 'Product information' : description ? 'Product description' : <></>}</h1>
          </div>
          {colorAndSize ? <>
            {/* size  */}
            <div className='mt-6'>
              <h1 className='text-secondary font-medium text-lg'>size</h1>
              <div className='mt-4 flex items-center gap-3 overflow-x-scroll'>
                <div className='uppercase w-10 h-10 rounded-sm p-1 text-secondary font-medium bg-halfWhite flex justify-center items-center shrink-0'>xs</div>
                <div className='uppercase w-10 h-10 rounded-sm p-1 text-secondary font-medium bg-halfWhite flex justify-center items-center shrink-0'>sm</div>
                <div className='uppercase w-10 h-10 rounded-sm p-1 text-white font-medium bg-secondary flex justify-center items-center shrink-0'>m</div>
                <div className='uppercase w-10 h-10 rounded-sm p-1 text-secondary font-medium bg-halfWhite flex justify-center items-center shrink-0'>l</div>
                <div className='uppercase w-10 h-10 rounded-sm p-1 text-secondary font-medium bg-halfWhite flex justify-center items-center shrink-0'>xl</div>
              </div>
            </div>
            {/* colors  */}
            <div className='mt-6'>
              <h1 className='text-secondary font-medium text-lg'>colors</h1>
              <div className='mt-4 flex items-center gap-2 flex-wrap'>
                <div className='w-[30px] h-[30px] rounded-full p-1 bg-purple-500'></div>
                <div className='w-[30px] h-[30px] rounded-full p-1 bg-yellow-500'></div>
                <div className='w-[30px] h-[30px] rounded-full p-1 bg-red-500'></div>
                <div className='w-[30px] h-[30px] rounded-full p-1 bg-blue-500'></div>
                <div className='w-[30px] h-[30px] rounded-full p-1 bg-green-500'></div>
                <div className='w-[30px] h-[30px] rounded-full p-1 bg-rose-500'></div>
                <div className='w-[30px] h-[30px] rounded-full p-1 bg-black'></div>
              </div>
            </div>
          </> : information ? <><div className='mt-6 text-secondary font-medium text-lg'>Measurements</div><div className='mt-6 flex flex-col gap-3.5 max-h-[40vh] overflow-y-auto'>{productInformationList}</div><div className='mt-6 text-secondary font-medium text-lg'>composition</div><div className='flex justify-between items-center mt-6'><p className='text-secondary'>material : </p><p className='text-tertiary'>100% cotton</p></div><div className='mt-6 flex justify-between items-center'><div className='text-secondary font-medium text-lg'>Brand</div><p className=''></p></div></> : description ? <><div className='px-3 py-3.5 bg-tertiary mt-6 rounded-sm'><p>Description</p><p className='text-sm font-light mt-2'>"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"</p></div></> : <p>Not to found</p>}
        </div>
      </div>
    </>
  )
}

function ProductDetail() {
  window.scroll({
    top: 0
  })
  const productId = useParams();
  console.log(productId.id);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const URL = `https://fakestoreapi.com/products/${productId.id}`;
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
   setTimeout(()=>{
    fetchData();
   },400)
  }, []);

  let productDetailContent;

  if (loading) {
    productDetailContent = <div className='h-screen w-full animate-pulse overflow-hidden'>
      <div className='h-1/2 w-full bg-bg-tab'></div>
      <div className='px-4 mt-6'>
        <div className='bg-bg-tab rounded-[6px] h-10'></div>
        <div className='bg-bg-tab rounded-full w-1/2 h-8 mt-4'></div>
        <div className='bg-bg-tab rounded-sm h-10 mt-6'></div>
        <div className='bg-bg-tab rounded-sm h-10 mt-6'></div>
        <div className='bg-bg-tab rounded-sm h-10 mt-6'></div>
      </div>
    </div>
  } else if (!loading) {
    productDetailContent = <>
      <div className='relative'>
        <img src={data.image} className='object-cover w-full ' />
        <div className='flex justify-between items-center px-6 py-3 absolute top-2 w-full'>
          <div className='w-[34px] h-[34px] rounded-full bg-white/[0.7] inline-flex justify-center items-center' onClick={() => { window.history.back() }}><FiArrowLeft className='text-lg' /></div>
          <WishList />
        </div>
      </div>

      <div className='px-4 py-1 mt-3.5'>
        <div className='flex justify-between items-start gap-2'>
          <p className='text-secondary font-normal '>{data.title}</p>
          <div className='flex flex-col items-center'>
            <h1 className='font-[550] text-center whitespace-nowrap'>$ {data.price}</h1>
            <div className='inline-flex items-center gap-0.5'><TiStarFullOutline className='text-yellow-400 text-sm' /><small className='font-medium text-[11px] text-tertiary'>{data.rating.rate}</small></div>
          </div>
        </div>
      </div>
      <div className='px-4 py-1 mt-1'>
        <p className='px-2 py-1.5 rounded-full text-center bg-tertiary text-xs font-light text-white inline-flex gap-0.5 items-center'>Best buy {data.rating.count}K <IoIosTrendingUp className='text-white' /></p>
      </div>
      <div className='mt-10 px-4'>
        <button className='inline-flex flex-row-reverse gap-2 items-center justify-center max-w-4col rounded-md font-medium bg-accent w-full px-2 py-3 text-base active:bg-accent/75 btn-shadow'><div className='btn-text-shadow'>Add to bag</div><MdOutlineShoppingBag className='text-lg text-black btn-text-shadow' /></button>
      </div>
      <ProductPopup />
      <div className='py-1'></div>
    </>
  }

  return (
    <section className='relative'>
      {productDetailContent}
      
    </section>
  )
}

export default ProductDetail
