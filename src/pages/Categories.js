import React, { useEffect, useState } from 'react'
import { FaFilter } from "react-icons/fa6";
import Card from '../components/Card';
import BottomNavbar from '../components/BottomNavbar';
import { NavLink } from 'react-router-dom';
let productCard;

function CategoriesTab() {
  let filterData;
  console.log("cate tab");
  const URL = "https://fakestoreapi.com/products/categories";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let tabs;
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
    setTimeout(() => fetchData(), 1000);
  }, []);
  if (loading) {
    tabs = <div className='flex overflow-x-scroll items-center gap-2.5'><div className='bg-bg-tab h-8 w-28 rounded-sm animate-pulse shrink-0'></div><div className='bg-bg-tab h-8 w-28 rounded-sm animate-pulse shrink-0'></div></div>
  } else if (data != null) {
    tabs = data.map((item, i) => {
      return (
        <p key={i} className='bg-bg-tab px-2.5 py-1 rounded-[4px] text-sm whitespace-nowrap capitalize'>{item}</p>
      )
    })
  }
  filterData=<div>test</div>
  return (
    <>
      {tabs}
    </>
  )
}

function GetAllProduct() {
  console.log("get all product");
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

function Categories() {
  let filterData;
  console.log("categories main");
  const URL = "https://fakestoreapi.com/products";
  const [userSearch, setUserSearch] = useState("");
  const [selectCategories, setSelectCategories] = useState("");
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
    setTimeout(() => fetchData(), 1000);

  }, []);

  function searchProduct(event) {
    setUserSearch(event)
  }
  if (userSearch != "") {
    if (data != null) {

      filterData = data.filter((data) => data.title.toLocaleLowerCase().includes(userSearch.toLocaleLowerCase()));
      // console.log(filterData.length);
      if (filterData.length != 0) {
        filterData = data.map((item) => {
          if (item.title.toLowerCase().includes(userSearch.toLowerCase())) {
            console.log("True...");
            return (
              <Card details={item} key={item.id} />
            )
          } else {
            console.log("false...");

          }
        })
      } else if (filterData.length == 0) {
        filterData = <div className='w-full h-[75vh] col-span-2 flex justify-center items-center'>
          <div className='inline-flex flex-col justify-center items-center'>
            <img src={require("../asset/images/icons/dissatisfied.png")} className='object-contain max-w-48' />
            <div className='text-center font-medium max-w-40'>nothing found, try something else</div>
          </div>
        </div>
      }
    }
  }

  window.scroll({
    top:0
  })

  return (
    <section>
      <div className='sticky top-0 z-[54] bg-primary/75 mt-4 py-2 px-4 mx-auto blur-[1]'>
        <div className='flex gap-2 items-center justify-center '>
        <NavLink to="/"><div><img src={require("../asset/images/logo.png")}  className='object-contain max-w-6 w-full'/></div></NavLink>
          <div className='w-10/12 border border-secondary rounded-sm '><input type='text' placeholder='search...' className='focus-within:outline-none rounded-sm px-5 py-2 text-sm w-full' onChange={(event) => { searchProduct(event.target.value) }} /></div>

          <div className='w-[38px] h-[38px] rounded-sm p-2.5 bg-accent inline-flex justify-center items-center cursor-pointer'>
            <img src={require("../asset/images/icons/shape.png")} className='object-contain max-w-5' />
          </div>

        </div>
      </div>
      {/* tabs  */}
      <div className='flex items-center gap-2.5 flex-nowrap overflow-x-auto font-medium text-black mt-4 py-2 px-4 '>
        <p className='px-2.5 py-0.5 bg-secondary text-white rounded-[4px]'>All</p>
        <CategoriesTab />
      </div>
      {/* products */}
      <div className='mt-3.5 px-4'>
        <div className='grid grid-cols-2 gap-3 place-items-center md:grid-cols-3 md:gap-y-12'>
          {userSearch == "" ? <GetAllProduct /> : <>{filterData}</>}
        </div>
      </div>
      <div className='py-8'></div>
      <BottomNavbar />
    </section>
  )
}

export default Categories
