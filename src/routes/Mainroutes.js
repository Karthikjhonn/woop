import React from "react";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import ProductDetail from "../pages/ProductDetail";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import Membership from "../pages/Membership";
import PageNotFound from "../pages/PageNotFound";
import Test from "../pages/Test";
import DownloadApp from "../pages/DownloadApp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "../layout/AppLayout";

function Mainroutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="productdetail/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="profile" element={<Profile />} />
          <Route path="membership" element={<Membership />} />
          <Route path="test" element={<Test />} />
        </Route>

        <Route path="/downloadApp" element={<AppLayout />}>
          <Route index element={<DownloadApp />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default Mainroutes;
