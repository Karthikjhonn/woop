import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import ProductDetail from './pages/ProductDetail';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import { createContext, useReducer, useState } from 'react';
import Profile from './pages/Profile';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='categories' element={<Categories />} />
      <Route path='productdetail/:id' element={<ProductDetail />} />
      <Route path='cart' element={<Cart />} />
      <Route path='wishlist' element={<Wishlist />} />
      <Route path='profile' element={<Profile />} />
    </Route>
  )
)
export const ProductCountContext = createContext();
const initialState = 0;
const reducer = (state, action) => {
  console.log("state", state);
  switch (action) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  
  return (

    <div className='font-poppins container mx-auto max-w-screen-lg'>
      <ProductCountContext.Provider value={{ count, dispatch }}>
        <RouterProvider router={router} />
      </ProductCountContext.Provider>
    </div>
  );
}

export default App;
