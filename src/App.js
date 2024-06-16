import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import { createContext, useReducer, useState } from "react";
import Profile from "./pages/Profile";
import Membership from "./pages/Membership";
import PageNotFound from "./pages/PageNotFound";
import Test from "./pages/Test";
import ProductCountContext from "./context/ProductCountContext";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="categories" element={<Categories />} />
      <Route path="productdetail/:id" element={<ProductDetail />} />
      <Route path="cart" element={<Cart />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="profile" element={<Profile />} />
      <Route path="membership" element={<Membership />} />
      <Route path="test" element={<Test />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  if (localStorage.getItem("cartItems") == null) {
    localStorage.setItem("cartItems", "[]");
  }

  return (
    <div className="font-poppins container mx-auto max-w-md">
      <ProductCountContext>
        <RouterProvider router={router} />
      </ProductCountContext>
    </div>
  );
}

export default App;
