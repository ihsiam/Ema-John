import './App.css'
import Navbar from './Component/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import Home from './Home/Home'
import Details from './Pages/Details'
import { useState } from 'react'
import Swal from 'sweetalert2';
import WishListDetails from './Pages/WishListDetails'

function App() {

  const [searchItem, setSearchItem] = useState('');
  const [cartData, setCartData] = useState([]);
  const [wishData, setWishData] = useState([]);

  const reciveSearchData = (data) =>{
    setSearchItem(data);
  }

  const CartItem = (item) =>{
    handleitem(cartData,setCartData,item,"cart");
  }

  const wishItem = (item) =>{
    handleitem(wishData,setWishData,item,"wishlist");
  }

  const handleitem = (defitm, setdef, Item, path) =>{
    if(!defitm.some((Cart) => Cart.key === Item.key)){
      setdef((prev) => [...prev, Item])
      Swal.fire({
        title:"Added to "+path,
        icon: "success",
        buttonsStyling: false,
        customClass: {
          confirmButton: 'px-4 py-2 font-bold bg-[#009444] text-white rounded-lg'
        }
      })
    }else{
      Swal.fire({
        title: "Already exists in "+ path,
        icon:"warning",
        buttonsStyling: false,
        customClass: {
          confirmButton: 'px-4 py-2 font-bold bg-[#dc3545] text-white rounded-lg'
        }
      });
    }
  }

  const removeCart = (key) =>{
    setCartData((prevCartData) => prevCartData.filter((item) => item.key !== key));
  }

  const removeWish = (key) =>{
    setWishData((prevCartData) => prevCartData.filter((item) => item.key !== key));
  }

  return (
    <>
      <BrowserRouter>
        <Navbar search={reciveSearchData}/>
        <Routes>
          <Route path='/' element={<Home searchData={searchItem}/>}/>
          <Route path='/cart' element={<Cart CartData={cartData} setCartData={setCartData}  handleRemove={removeCart}/>}/>
          <Route path='/wishlist' element={<Wishlist data={wishData} removeWish={removeWish}/>}/>
          <Route path='/:key' element={<Details handleCart={CartItem} handleWish={wishItem}/>}/>
          <Route path='/wishlist/:key' element={<WishListDetails handleCart={CartItem}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
