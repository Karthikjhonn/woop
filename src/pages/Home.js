import React, { useContext, useEffect, useState } from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import { IoNotifications } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Card from '../components/Card';
import BottomNavbar from '../components/BottomNavbar';
import BlogCard from '../components/BlogCard';
import { NavLink, useNavigate } from 'react-router-dom';
import { ProductCountContext } from '../App';

function WelcomeScreen({ visitedUser, userName }) {
  return (
    <div className='w-full h-svh bg-accent text-white p-4 flex flex-col items-center justify-around '>
      <div className='inline-block'><img src={require("../asset/images/logo.png")} className='max-w-[120px] aspect-square' /></div>
      <div className='flex flex-col gap-6  text-center max-w-4col'>
        <h1 className='font-markScript font-medium text-[32px] capitalize'>Discover Your Signature Style</h1>
        <p className='text-sm font-merienda font-normal'>where fashion meets style, and design is an art form.</p>
      </div>
      <div>
        <div className={`mb-4 capitalize text-center font-extralight ${visitedUser ? 'block' : 'hidden'}`}><p>Welcome back!!</p><small className='text-xs font-medium'>{userName}</small></div>
        <div className='inline-flex items-center gap-2.5 px-2 py-1.5 border border-secondary rounded-full'><button className='capitalize font-poppins font-normal'>get started</button><div className='bg-secondary w-[26px] h-[26px] rounded-full p-1 '><IoArrowForwardOutline className='m-auto' /></div></div>
      </div>
    </div>
  )
}

function StatusView() {
  const [statusView, setStatusView] = useState(false);
  function openStatus() {
    if (statusView) {
      setStatusView(false);
      setTimeout(() => {
        setStatusView(true);
      }, 5000)
    } else if (!statusView) {
      setStatusView(true);
      setTimeout(() => {
        setStatusView(false);
      }, 5000)
    }
  }

  return (
    <>
      <div onClick={openStatus} className='flex flex-col gap-0.5 items-center'>
        <div className='w-10 h-10 rounded-full '>
          <img src={require("../asset/images/s-img1.png")} className='object-contain min-w-10 max-w-10 w-full' />
        </div>
        <small className='capitalize text-center text-[6px]'>top trends</small>
      </div>
      <div onClick={openStatus} className='flex flex-col gap-0.5 items-center'>
        <div className='w-10 h-10 rounded-full '>
          <img src={require("../asset/images/s-img2.png")} className='object-contain min-w-10 max-w-10 w-full' />
        </div>
        <small className='capitalize text-center text-[6px]'>top trends</small>
      </div>
      <div onClick={openStatus} className='flex flex-col gap-0.5 items-center'>
        <div className='w-10 h-10 rounded-full '>
          <img src={require("../asset/images/s-img1.png")} className='object-contain min-w-10 max-w-10 w-full' />
        </div>
        <small className='capitalize text-center text-[6px]'>top trends</small>
      </div>
      <div onClick={openStatus} className='flex flex-col gap-0.5 items-center'>
        <div className='w-10 h-10 rounded-full '>
          <img src={require("../asset/images/s-img2.png")} className='object-contain min-w-10 max-w-10 w-full' />
        </div>
        <small className='capitalize text-center text-[6px]'>top trends</small>
      </div>
      {statusView ? <div className='fixed top-0 left-0 w-full h-svh bg-black text-white z-30 overflow-hidden'>
        <img src='https://cdn.pixabay.com/photo/2015/04/10/17/09/woman-716592_640.jpg' className='w-full h-full object-cover' />
        <div className='px-[14px] absolute bottom-8 space-y-2'>
          <p className='text-xl font-medium'>We aren't just a brand; we're a statement, a celebration of your unique style.</p>
          <p className='text-sm font-light'>we believe that fashion is a reflection of your personality. Our carefully crafted designs are not just clothes.</p>
        </div>
        <div className='bg-tertiary/50 rounded-full w-full h-0.5 absolute top-4'>
          <div className='h-0.5 bg-red-500 statusBar'></div>
        </div>
        {/* <div className='flex justify-between items-center absolute top-0  w-full h-full'>
          <div onClick={openStatus} className='min-w-[45vw] h-full bg-red-400'></div>
          <div onClick={openStatus} className='min-w-[45vw] h-full bg-purple-500'></div>
        </div> */}
      </div> : <></>}
    </>
  )
}

function LocationToggle() {
  const [toggle, setToggle] = useState(true);
  function handelToggle() {
    if (toggle) {
      setToggle(false)
    } else if (!toggle) {
      setToggle(true)
    };
  }
  return (
    <>
      <div onClick={handelToggle} className={`pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out  ring-secondaryAccent/5 ${toggle ? 'bg-accent' : 'bg-zinc-200'}`}><div className={`h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out ${toggle ? 'translate-x-4' : 'translate-x-0'}`}></div></div>
      {toggle ? <></> : <div className='fixed top-0 left-0 w-full h-svh bg-black/25 z-[500] flex justify-center items-center p-4'>
        <div className='max-w-sm mx-auto w-full bg-white p-3 py-8 rounded-sm text-sm text-center text-secondary'>
          please make sure, your location is <br /> enable.
          <div><button className='mt-2.5 px-4 py-1 bg-secondary text-white rounded-full' onClick={handelToggle}>ok</button></div>
        </div>
      </div>}
    </>
  )
}

function Recommended() {
  const URL = "https://fakestoreapi.com/products/categories";
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
    fetchData();
  }, [])
  let items;
  if (loading) {
    items = <div className='flex gap-2 items-center justify-between overflow-x-scroll py-2.5 px-2 w-full'><div className='bg-slate-200 w-10 h-10 animate-pulse rounded-full'></div><div className='bg-slate-200 w-10 h-10 animate-pulse rounded-full'></div><div className='bg-slate-200 w-10 h-10 animate-pulse rounded-full'></div><div className='bg-slate-200 w-10 h-10 animate-pulse rounded-full'></div></div>
  } else if (data != null) {
    items = data.map((listItem, i) => {
      return (
        <NavLink key={i} to='/categories'>
          <div className='flex flex-col gap-1 items-center ' >
            <div className='w-10 h-10 rounded-full bg-slate-200 flex-shrink-0'>
              <img src={require(`../asset/images/recommendimgs/recomimg${i + 1}.jpg`)} className='w-full h-full object-cover rounded-full' />
            </div>
            <small className='text-xs capitalize w-full max-w-28 whitespace-nowrap overflow-hidden text-ellipsis text-center'>{listItem}</small>
          </div>
        </NavLink>
      )
    });
  }
  return (
    <div className='flex gap-2 items-center  flex-nowrap overflow-x-scroll py-2.5 px-2'>
      {items}
    </div>
  )
}

function TrendingProduct() {
  let productCard
  const categories = "men's clothing"
  const URL = "https://fakestoreapi.com/products/category/" + categories + "";
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
    fetchData();
  }, []);
  if (loading) {
    productCard = <><div className='w-full h-44 animate-pulse bg-bg-tab rounded-xl'></div><div className='w-full h-44 animate-pulse bg-bg-tab rounded-xl'></div><div className='w-full h-44 animate-pulse bg-bg-tab rounded-xl'></div><div className='w-full h-44 animate-pulse bg-bg-tab rounded-xl'></div></>
  } else if (data != null) {
    productCard = data.map((item) => {
      return (
        <Card details={item} key={item.id} productID={item.id} />
      )
    })
  }
  return (
    <>
      {productCard}
    </>
  )
}

function CenterContent() {
  const { state, dispatch } = useContext(ProductCountContext);
  const navigate = useNavigate();
  const imgSrc = [
    require('../asset/images/brand/Rectangle 55.png'),
    require('../asset/images/brand/Rectangle 56.png'),
    require("../asset/images/brand/Rectangle 57.png"),
    require("../asset/images/brand/Rectangle 58.png"),
    require("../asset/images/brand/Rectangle 59.png"),
    require("../asset/images/brand/Rectangle 60.png"),
    require("../asset/images/brand/Rectangle 61.png"),
    require("../asset/images/brand/Rectangle 62.png"),
  ]

  let brandImg;
  brandImg = imgSrc.map((data) => {
    if (data.length == 5350 || data.length == 3978) {
      return (
        <div className='max-w-20 w-full h-full rounded-md col-span-3' key={data.length}><img src={data} alt='brandImage' /></div>
      );
    }
    else {
      return (
        <div className='max-w-20 w-full h-full rounded-md col-span-2' key={data.length}><img src={data} alt='brandImage' /></div>
      );
    }
  })
  window.scroll({
    top: 0
  })
  return (
    <section>

      <div className='bg-primary sticky top-0 z-[499] flex items-center justify-between pt-6 pb-2 px-4'>

        <div className='flex gap-1.5 items-center max-w-[60%] overflow-x-scroll no-scrollbar'>
          <div className='w-10 h-10 rounded-full flex justify-center items-center'><img src={require("../asset/images/logo.png")} className='object-contain max-w-10 ' /></div>
          <StatusView />
        </div>

        <div className='flex items-center gap-1.5'>
          <div className='flex justify-center items-center'>
            <button onClick={() => navigate('/cart')} className='w-10 h-10 rounded-full  flex justify-center items-center relative active:bg-halfWhite/75'>
              <HiShoppingCart className='text-xl m-auto' />
              <div className='p-1 w-3.5 h-3.5 rounded-full bg-secondary text-white text-[8px] font-medium flex justify-center items-center absolute -top-1 left-1/2 -translate-x-1/2'>{state.count}</div>
            </button>
          </div>
          <div className='flex justify-center items-center'>
            <button className='w-10 h-10 rounded-full  flex justify-center items-center relative active:bg-halfWhite/75'>
              <IoNotifications className='text-xl m-auto' />
              <div className='w-2 h-2 bg-accent/75 rounded-full absolute top-1/3 left-[60%] -translate-x-1/2 -translate-y-1/2'></div>
            </button>
          </div>
        </div>
      </div>

      <div className='mt-6 px-4 flex justify-between items-center'>
        <div className='inline-flex items-center gap-1.5'>
          <div><FaLocationDot className='text-lg' /></div>
          <p className='text-secondary font-normal capitalize'><small className='text-[9px] text-tertiary font-light block leading-[.5]'>Location</small>Chennai</p>
        </div>
        <LocationToggle />
      </div>

      <div className='mt-6 px-4'>
        <input type='text' placeholder='search here..' className='border border-secondary rounded-full px-5 py-2 w-full  placeholder:text-sm placeholder:font-extralight focus-within:outline-none' />
      </div>
      {/* banners  */}
      <div className='mt-6 px-4'>
        <div className=' w-full bg-slate-200 rounded-xl'>
          <img src={require("../asset/images/4eb2ab40d43c00f4663d8712fd446594.jpg")} className='object-cover w-full rounded-xl' />
        </div>
      </div>

      <div className='mt-6 px-4 flex justify-between items-center capitalize'>
        <p className='font-medium text-sm text-secondary'>trendsetter</p>
        <NavLink to="/categories"><button className='text-white bg-accent text-[8px] font-medium rounded-xs px-2 py-1 mr-6 btn-shadow'>view all</button></NavLink>
      </div>

      {/* products  */}
      <div className='mt-3.5 px-4'>
        <div className='grid grid-cols-2 gap-3 place-items-center md:grid-cols-3'>
          <TrendingProduct />
        </div>
      </div>

      <div className='h-[100dvh] mt-6 py-2 relative'>
        <img src={require("../asset/images/productsimage/h&m.png")} className='w-full h-full object-cover md:object-top' />
        {/* <p className="absolute top-2 left-2 text-red-600 text-[38px] font-markScript">H&M</p> */}
        <div className='absolute top-6 left-2'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="75" height="75" viewBox="0 0 50 50">
            <path d="M 13.148438 4 C 8.1071126 4 4 8.1071126 4 13.148438 L 4 36.851562 C 4 41.892888 8.1071126 46 13.148438 46 L 36.851562 46 C 41.892888 46 46 41.892888 46 36.851562 L 46 13.148438 C 46 8.1071126 41.892888 4 36.851562 4 L 13.148438 4 z M 13.148438 6 L 36.851562 6 C 40.812238 6 44 9.1877614 44 13.148438 L 44 36.851562 C 44 40.812238 40.812238 44 36.851562 44 L 13.148438 44 C 9.1877614 44 6 40.812238 6 36.851562 L 6 13.148438 C 6 9.1877614 9.1877614 6 13.148438 6 z M 23.681641 13.644531 C 23.62801 13.642906 23.564937 13.655141 23.492188 13.681641 C 22.910187 13.893641 21.005031 14.421047 20.582031 15.373047 C 20.582031 15.373047 19.373953 18.593906 18.001953 22.253906 C 16.660953 22.505906 15.247594 22.798938 13.933594 23.085938 C 15.376594 19.285937 16.713594 15.776844 16.933594 15.214844 C 17.409594 13.997844 16.404531 13.574813 15.769531 14.632812 C 15.520531 15.047812 13.923313 19.196312 12.320312 23.445312 C 10.671313 23.824313 9.3635781 24.1555 8.8925781 24.3125 C 8.8925781 24.3125 8.1529063 25.001359 8.6289062 25.318359 C 9.0869063 25.623359 9.2666094 25.792297 10.974609 27.029297 C 9.7946094 30.187297 8.8471094 32.767281 8.7871094 32.988281 C 8.6281094 33.570281 9.3686406 35.262422 10.056641 33.357422 C 10.326641 32.610422 11.368453 29.846453 12.564453 26.689453 C 13.764453 26.341453 15.322797 25.986641 16.716797 25.681641 C 15.418797 29.146641 14.263859 32.239187 14.130859 32.617188 C 13.813859 33.516188 14.605234 33.992219 15.240234 34.574219 C 15.875234 35.156219 16.034719 35.686906 16.511719 34.628906 C 16.747719 34.104906 18.438047 29.496859 20.123047 24.880859 C 21.388047 24.388859 22.367688 23.111828 22.804688 22.673828 C 23.280687 22.197828 23.493484 21.5625 22.646484 21.5625 C 22.264484 21.5875 21.797297 21.637031 21.279297 21.707031 C 22.536297 18.258031 23.579125 15.385641 23.703125 15.056641 C 23.9805 14.316391 24.057057 13.655906 23.681641 13.644531 z M 40.277344 13.863281 C 40.210457 13.862906 40.134703 13.872828 40.048828 13.892578 C 39.360828 14.051578 37.986562 14.368578 37.351562 15.267578 C 36.716563 16.166578 32.961938 24.418891 31.585938 27.962891 C 31.585938 26.428891 32.855938 15.584219 32.960938 14.949219 C 33.066938 14.314219 32.801969 13.837094 32.167969 13.996094 C 31.532969 14.155094 29.891547 14.419719 29.310547 15.636719 C 28.728547 16.853719 24.127547 31.40075 23.810547 33.09375 C 23.493547 34.78675 24.921547 34.36375 25.185547 33.09375 C 25.450547 31.82375 29.205078 20.027344 29.205078 20.027344 C 29.205078 20.027344 28.728781 28.702859 28.675781 30.130859 C 28.622781 31.558859 29.786516 32.562859 30.103516 32.880859 C 30.420516 33.197859 30.686906 33.622187 31.003906 32.617188 C 31.320906 31.612188 36.769531 19.128906 36.769531 19.128906 C 36.769531 19.128906 34.389469 31.400187 34.230469 32.617188 C 34.071469 33.834187 36.398109 36.477156 36.662109 34.785156 C 36.926109 33.092156 40.472859 15.320016 40.630859 14.791016 C 40.769984 14.329016 40.745551 13.865906 40.277344 13.863281 z M 21.869141 25.783203 C 21.489693 25.777596 21.086484 26.018156 20.818359 26.613281 C 20.712359 26.983281 20.800172 27.805453 20.951172 28.439453 C 18.967172 29.761453 19.628344 31.851297 20.527344 31.904297 C 21.426344 31.957297 22.035156 31.269531 22.035156 31.269531 C 22.035156 31.269531 22.406344 32.061484 22.777344 31.771484 C 23.147344 31.480484 22.539062 30.714844 22.539062 30.714844 C 22.539062 30.714844 23.174375 30.10625 23.359375 29.65625 C 23.545375 29.20625 23.121875 28.8095 22.671875 29.3125 C 22.221875 29.8155 22.169922 29.550781 22.169922 29.550781 L 21.957031 28.597656 C 21.957031 28.597656 22.706469 27.999859 22.855469 27.380859 C 23.070469 26.488359 22.501553 25.792549 21.869141 25.783203 z M 21.878906 26.560547 C 22.565906 26.613547 21.905969 27.407406 21.667969 27.566406 C 21.667969 27.566406 21.190906 26.507547 21.878906 26.560547 z M 21.349609 29.337891 C 21.349609 29.337891 21.401203 29.919328 21.533203 30.236328 C 20.978203 30.818328 20.265609 30.289891 21.349609 29.337891 z"></path>
          </svg>
        </div>
      </div>
      {/* brandImages */}
      <div className='bg-white py-6 px-4'>
        <div className=' grid grid-cols-6 place-items-center place-self-center gap-2 max-w-sm mx-auto'>
          {brandImg}
        </div>
      </div>
      {/* recommended */}
      <div className='mt-6 px-4'>
        <h1 className='capitalize font-medium text-sm text-secondary mb-2'>recommended for you</h1>
        <Recommended />
      </div>
      {/* membership */}
      <div className='mt-6 px-4'>
        <div className='border bg-gradient-to-r from-violet-200 via-accent/75 to-pink-200 border-secondary w-full max-w-xs mx-auto pt-2 rounded-sm'>
          <div className='bg-white p-2.5 rounded-sm rounded-tr-none rounded-tl-none'>
            <h1 className='capitalize font-medium text-lg text-black text-center pt-2'>membership</h1>
            <p className='py-4 text-xs font-light text-center'>Enjoy exclusive benefits and discounts when you join.</p>
            <div className='flex justify-center'>
              <NavLink to='/membership'>
                <button className='font-normal px-6 py-2 bg-secondary text-white rounded-full text-sm text-center mx-auto active:bg-secondary/75'>Add</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* blog section  */}
      <section className='mt-6 px-4'>
        {/* <BlogCard /> */}
        <div className='py-2 flex gap-2 overflow-x-auto'>

          <div className='min-w-40 h-72 rounded-sm relative'>
            <img src='https://cdn.pixabay.com/photo/2017/07/20/10/02/portrait-2521800_1280.jpg' className='w-full h-full rounded-sm object-cover object-center' />
            <div className='absolute bottom-2 left-2 rounded-xs bg-white px-3 py-1.5 text-secondary text-xs font-normal font-merienda'>
              kid's
            </div>
          </div>
          <div className='min-w-40 h-72 rounded-sm relative'>
            <img src='https://cdn.pixabay.com/photo/2018/10/10/14/24/shirt-3737405_1280.jpg' className='w-full h-full rounded-sm object-cover object-center' />
            <div className='absolute bottom-2 left-2 rounded-xs bg-white px-3 py-1.5 text-secondary text-xs font-normal font-merienda'>
              men's
            </div>
          </div>
          <div className='min-w-40 h-72 rounded-sm relative'>
            <img src='https://cdn.pixabay.com/photo/2019/11/21/15/00/woman-4642701_1280.jpg' className='w-full h-full rounded-sm object-cover object-center' />
            <div className='absolute bottom-2 left-2 rounded-xs bg-white px-3 py-1.5 text-secondary text-sm font-normal font-merienda'>
              women's
            </div>
          </div>
          <div className='min-w-40 h-72 rounded-sm relative'>
            <img src='https://cdn.pixabay.com/photo/2019/09/09/14/55/fashion-4463802_1280.jpg' className='w-full h-full rounded-sm object-cover object-center' />
            <div className='absolute bottom-2 left-2 rounded-xs bg-white px-3 py-1.5 text-secondary text-sm font-normal font-merienda'>
              trends's
            </div>
          </div>

        </div>
      </section>
      <div className='py-8'></div>
      <BottomNavbar />
    </section>
  )
}

function Home() {
  const [showGreeting, setShowGreeting] = useState(true);
  useEffect(() => {
    // Check if the greeting has been shown before
    const hasShownGreeting = localStorage.getItem('hasShownGreeting');

    if (!hasShownGreeting) {
      // If not shown before, display the greeting
      setShowGreeting(true);

      // Set a flag in local storage to indicate that the greeting has been shown
      localStorage.setItem('hasShownGreeting', true);

      // Hide the greeting after 3 seconds
      setTimeout(() => {
        setShowGreeting(false);
      }, 3000);
    } else {
      // If the greeting has been shown before, hide it
      setShowGreeting(false);
    }
  }, []);

  return (
    <>
      {showGreeting ? <WelcomeScreen /> : <CenterContent />}
    </>
  )
}

WelcomeScreen.defaultProps = {
  userName: "undefind"
}
export default Home
