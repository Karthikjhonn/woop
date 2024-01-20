import React, { useEffect, useState } from "react";
import BottomNavbar from "../components/BottomNavbar";
import { useNavigate } from "react-router-dom";
import WishlistCard from "../components/WishlistCard";

function Cart() {
  const navigate = useNavigate();
  let cartItems;

  const cartProduct = JSON.parse(localStorage.getItem("cartItems"));
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
    setTimeout(() => fetchData(), 500);
  }, []);

  if (cartProduct == null || cartProduct == "") {
    cartItems = (
      <div className="w-full min-h-64 flex flex-col justify-center items-center">
        <img
          src={require("../asset/images/icons/surprised.png")}
          className="object-contain"
        />
        <p className="text-base text-tertiary font-normal text-center  mt-6">
          Seems your cart items is empty <br /> Explore more product{" "}
          <span
            onClick={() => navigate("/categories")}
            className="underline active:text-blue-500"
          >
            here
          </span>
        </p>
      </div>
    );
  } else {
    if (loading) {
      cartItems = (
        <>
          <div className="w-full h-28 rounded-sm bg-bg-tab animate-pulse"></div>
          <div className="w-full h-28 rounded-sm bg-bg-tab animate-pulse"></div>
          <div className="w-full h-28 rounded-sm bg-bg-tab animate-pulse"></div>
          <div className="w-full h-28 rounded-sm bg-bg-tab animate-pulse"></div>
        </>
      );
    } else if (!loading) {
      cartItems = cartProduct.map((id, i) => {
        return (
          <>
            <WishlistCard key={i} ID={id} data={data[id - 1]} bagBtn={false} page={'cartPage'} onRerender={handleChildRerender} />
          </>
        );
      });
    }
  }
  // window.scroll({
  //   top: 0,
  // })
  return (
    <div className="mt-6 mb-20">
      <h1 className="text-lg text-secondary font-medium mt-6 py-1.5 sticky top-0 bg-primary px-4">
        Cart
      </h1>
      <div className=" px-4 grid grid-flow-row gap-2 mt-6 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {cartItems}
      </div>
      {cartProduct == null || cartProduct == "" ? (
        <></>
      ) : (
        <div className="my-6">
          <div className="px-4 flex justify-center items-center">
            <button className="btn-text-shadow active:bg-secondary/75 px-2.5 py-2.5 text-white bg-secondary w-full max-w-4col rounded-sm">
              Check out
            </button>
          </div>
        </div>
      )}

      <BottomNavbar />
    </div>
  );
}

export default Cart;
