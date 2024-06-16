import React, { useContext, useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { IoIosTrendingUp } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { CountContext } from "../context/ProductCountContext";

function WishList({ id }) {
  const [wishState, setWishState] = useState(false);
  const likedProduct = JSON.parse(localStorage.getItem("likedProduct"));
  useEffect(() => {
    if (localStorage.getItem("likedProduct") == null) {
      localStorage.setItem("likedProduct", "[]");
      console.log("array created");
    }
    if (likedProduct != null) {
      likedProduct.map((ID) => {
        if (ID == id) {
          setWishState(true);
        }
      });
    }
  }, []);

  function wishlistAdd(id) {
    if (wishState) {
      const allLikedProduct = JSON.parse(localStorage.getItem("likedProduct"));
      var removedProduct = allLikedProduct.filter((data) => data !== id);
      localStorage.setItem("likedProduct", JSON.stringify(removedProduct));
      setWishState(false);
    } else if (!wishState) {
      const otherLikedProduct = JSON.parse(
        localStorage.getItem("likedProduct")
      );
      otherLikedProduct.push(id);
      localStorage.setItem("likedProduct", JSON.stringify(otherLikedProduct));
      setWishState(true);
    }
  }

  return (
    <div
      onClick={() => wishlistAdd(id)}
      className="active:bg-accent/25 active:scale-110 transition-transform duration-150 ease-in-out w-[34px] h-[34px] rounded-full bg-white/[0.7] inline-flex justify-center items-center"
    >
      {wishState ? (
        <FaHeart className="text-lg text-secondaryAccent" />
      ) : (
        <FaRegHeart className="text-lg text-secondaryAccent" />
      )}
    </div>
  );
}

function ProductPopup() {
  const [colorAndSize, setColorAndSize] = useState(false);
  const [information, setInformation] = useState(false);
  const [description, setDescription] = useState(false);
  const [sizeVariant, setSizeVariant] = useState("m");
  function handelSizeVariant(prop) {
    setSizeVariant(prop);
  }
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
    { color: "black" },
    { height: "78 cm" },
    { width: "45 CM" },
    { weight: "106 g" },
  ];

  productInformationList = productItemList.map((data, i) => {
    return (
      <div key={i} className="flex justify-between items-center capitalize">
        <p className="text-secondary">
          {data.color
            ? "color"
            : data.height
            ? "height"
            : data.width
            ? data.width
            : data.weight
            ? data.weight
            : ""}{" "}
          :{" "}
        </p>
        <p className="text-tertiary">
          {data.color
            ? data.color
            : data.height
            ? data.height
            : data.width
            ? data.width
            : data.weight
            ? data.weight
            : ""}
        </p>
      </div>
    );
  });

  return (
    <>
      {/* size , description,colors */}
      <div className="mt-7">
        <div
          onClick={() => handelPopup("colorandsize")}
          className="mt-1 px-4 py-4 bg-white font-light text-xs capitalize text-secondary flex items-center justify-between"
        >
          <p>color & size</p>
          <MdKeyboardArrowRight className="text-lg" />
        </div>
        <div
          onClick={() => handelPopup("information")}
          className="mt-1 px-4 py-4 bg-white font-light text-xs capitalize text-secondary flex items-center justify-between"
        >
          <p>product information </p>
          <MdKeyboardArrowRight className="text-lg" />
        </div>
        <div
          onClick={() => handelPopup("description")}
          className="mt-1 px-4 py-4 bg-white font-light text-xs capitalize text-secondary flex items-center justify-between"
        >
          <p>description </p>
          <MdKeyboardArrowRight className="text-lg" />
        </div>
      </div>
      <div
        className={`bg-black/25 w-full h-dvh fixed top-0 left-0 ${
          colorAndSize
            ? "block"
            : information
            ? "block"
            : description
            ? "block"
            : "hidden"
        }`}
      >
        <div
          className="absolute top-0 left-0 bg-transparent w-full h-full"
          onClick={handelPopupClose}
        ></div>
        <div className="bg-white w-full pb-10 pt-1 px-4 bottom-0 absolute max-h-[75vh] overflow-y-scroll">
          <div className="bg-black w-16 h-1 rounded-full mx-auto"></div>
          <div className="mt-4 sticky top-0 bg-white">
            <h1 className="text-xl font-medium text-[#212121] py-6 capitalize">
              {colorAndSize ? (
                "color & size"
              ) : information ? (
                "Product information"
              ) : description ? (
                "Product description"
              ) : (
                <></>
              )}
            </h1>
          </div>
          {colorAndSize ? (
            <>
              {/* size  */}
              <div className="mt-6">
                <h1 className="text-secondary font-medium text-lg">size</h1>
                <div className="mt-4 mb-1 flex items-center gap-3 overflow-x-scroll">
                  <div onClick={()=>handelSizeVariant('xs')} className={`uppercase w-10 h-10 rounded-sm p-1 text-secondary font-medium bg-halfWhite flex justify-center items-center shrink-0 ${sizeVariant=='xs'?'text-white bg-secondary':''}`}>
                    xs
                  </div>
                  <div onClick={()=>handelSizeVariant('sm')} className={`uppercase w-10 h-10 rounded-sm p-1 text-secondary font-medium bg-halfWhite flex justify-center items-center shrink-0 ${sizeVariant=='sm'?'text-white bg-secondary':''}`}>
                    sm
                  </div>
                  <div onClick={()=>handelSizeVariant('m')} className={`uppercase w-10 h-10 rounded-sm p-1  font-medium bg-halfWhite text-secondary flex justify-center items-center shrink-0 ${sizeVariant=='m'?'text-white bg-secondary':''}`}>
                    m
                  </div>
                  <div onClick={()=>handelSizeVariant('l')} className={`uppercase w-10 h-10 rounded-sm p-1 text-secondary font-medium bg-halfWhite flex justify-center items-center shrink-0 ${sizeVariant=='l'?'text-white bg-secondary':''}`}>
                    l
                  </div>
                  <div onClick={()=>handelSizeVariant('xl')} className={`uppercase w-10 h-10 rounded-sm p-1 text-secondary font-medium bg-halfWhite flex justify-center items-center shrink-0 ${sizeVariant=='xl'?'text-white bg-secondary':''}`}>
                    xl
                  </div>
                </div>
               {sizeVariant=='l'? <small className="text-red-500">Out of stock</small>:null}
              </div>
              {/* colors  */}
              <div className="mt-6">
                <h1 className="text-secondary font-medium text-lg">colors</h1>
                <div className="mt-4 flex items-center gap-4 flex-wrap">
                  <div className="size-7 hover:scale-110 transition-transform duration-150 ease-in rounded-full p-1 bg-purple-500"></div>
                  <div className="size-7 hover:scale-110 transition-transform duration-150 ease-in rounded-full p-1 bg-yellow-500"></div>
                  <div className="size-7 hover:scale-110 transition-transform duration-150 ease-in rounded-full p-1 bg-red-500"></div>
                  <div className="size-7 hover:scale-110 transition-transform duration-150 ease-in rounded-full p-1 bg-blue-500"></div>
                  <div className="size-7 hover:scale-110 transition-transform duration-150 ease-in rounded-full p-1 bg-green-500"></div>
                  <div className="size-7 hover:scale-110 transition-transform duration-150 ease-in rounded-full p-1 bg-rose-500"></div>
                  <div className="size-7 hover:scale-110 transition-transform duration-150 ease-in rounded-full p-1 bg-black"></div>
                </div>
              </div>
            </>
          ) : information ? (
            <>
              <div className="text-secondary font-medium text-lg">
                Measurements
              </div>
              <div className="mt-6 flex flex-col gap-3.5 max-h-[40vh] overflow-y-auto">
                {productInformationList}
              </div>
              <div className="mt-6 text-secondary font-medium text-lg">
                composition
              </div>
              <div className="flex justify-between items-center mt-6">
                <p className="text-secondary">material : </p>
                <p className="text-tertiary">100% cotton</p>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div className="text-secondary font-medium text-lg">Brand</div>
                <p className=""></p>
              </div>
            </>
          ) : description ? (
            <>
              <div className="px-3 py-3.5 bg-bg-tab mt-6 rounded-sm">
                <p>Description</p>
                <p className="text-sm font-light mt-2">
                  "Your perfect pack for everyday use and walks in the forest.
                  Stash your laptop (up to 15 inches) in the padded sleeve, your
                  everyday"
                </p>
              </div>
            </>
          ) : (
            <p>Not to found</p>
          )}
        </div>
      </div>
    </>
  );
}

function ProductDetail() {
  const productId = useParams();
  const { state, dispatch } = useContext(CountContext);
  const [addToBag, setAddToBag] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function addtobag(id) {
    if (!addToBag) {
      setAddToBag(true);
    }
    const otherLikedProduct = JSON.parse(localStorage.getItem("cartItems"));
    if (otherLikedProduct.length == 0) {
      otherLikedProduct.push(id);
      localStorage.setItem("cartItems", JSON.stringify(otherLikedProduct));
      dispatch("INCREMENT");
    } else {
      const otherLikedProduct = JSON.parse(localStorage.getItem("cartItems"));
      if (!otherLikedProduct.includes(id)) {
        console.log("if true");
        otherLikedProduct.push(id);
        localStorage.setItem("cartItems", JSON.stringify(otherLikedProduct));
        dispatch("INCREMENT");
      }
    }
  }

  useEffect(() => {
    window.scroll({
      top: 0,
    });
    if (localStorage.getItem("cartItems") == null) {
      localStorage.setItem("cartItems", "[]");
    }
    const URL = `https://fakestoreapi.com/products/${productId.id}`;
    const fetchData = async () => {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 400);
  }, []);

  let productDetailContent;

  if (loading) {
    productDetailContent = (
      <div className="h-screen w-full animate-pulse overflow-hidden">
        <div className="h-1/2 w-full bg-tertiary"></div>
        <div className="px-4 mt-6">
          <div className="bg-tertiary rounded-[6px] h-10"></div>
          <div className="bg-tertiary rounded-full w-1/2 h-8 mt-4"></div>
          <div className="bg-tertiary rounded-sm h-10 mt-6"></div>
          <div className="bg-tertiary rounded-sm h-10 mt-6"></div>
          <div className="bg-tertiary rounded-sm h-10 mt-6"></div>
        </div>
      </div>
    );
  } else if (!loading) {
    productDetailContent = (
      <>
        <div className="relative">
          <img src={data.image} className="object-cover w-full " />
          <div className="flex justify-between items-center px-6 py-3 absolute top-2 w-full">
            <div
              className="w-[34px] h-[34px] rounded-full bg-white/[0.7] inline-flex justify-center items-center"
              onClick={() => {
                window.history.back();
              }}
            >
              <FiArrowLeft className="text-lg" />
            </div>
            <WishList id={data.id} />
          </div>
        </div>

        <div className="px-4 py-1 mt-3.5">
          <div className="flex justify-between items-start gap-2">
            <p className="text-secondary font-normal ">{data.title}</p>
            <div className="flex flex-col items-center">
              <h1 className="font-[550] text-center whitespace-nowrap">
                $ {data.price}
              </h1>
              <div className="inline-flex items-center gap-0.5">
                <TiStarFullOutline className="text-yellow-400 text-sm" />
                <small className="font-medium text-[11px] text-tertiary">
                  {data.rating.rate}
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-1 ">
          <p className="text-xs font-normal text-tertiary inline-flex items-center gap-1">
            Best buy | {data.rating.count}K{" "}
            <IoIosTrendingUp className="text-tertiary" />
          </p>
        </div>
        <div className="mt-10 px-4 flex justify-center items-center">
          <button
            className="inline-flex flex-row-reverse gap-2 items-center justify-center max-w-4col rounded-md font-medium bg-accent w-full px-2 py-3 text-base active:bg-accent/75 btn-shadow"
            onClick={() => addtobag(data.id)}
          >
            <div className="btn-text-shadow">
              {addToBag ? "Added to bag" : "Add to bag"}
            </div>
            <MdOutlineShoppingBag className="text-lg text-black btn-text-shadow" />
          </button>
        </div>
        <ProductPopup />
        <div className="py-1"></div>
      </>
    );
  }

  return <section className="relative">{productDetailContent}</section>;
}

export default ProductDetail;
