import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Review from './Components/ReviewPart/Review';
import ProductDetails from "./Components/ProductDetail/ProductDetails"
import Setting from './Components/ProfilePage/Setting';
import OrderDetail from './Components/ProfilePage/OrderDetail';
import MyOrder from './Components/ProfilePage/MyOrder';
import MyProfile from './Components/ProfilePage/MyProfile';
import FavouriteGrid from './Components/FavouritePage/FavouriteGrid';
import FavouritePageList from './Components/FavouritePage/FavouritePageList';
import BrandPage from './Components/FilterPage/BrandPage';
import FilterPage from "./Components/FilterPage/FilterPage"
import CatalogPage from './Components/CatalogPage/CatalogPage'
import CatalogPage2 from './Components/CatalogPage/CatelogPage2'
import CartPage from "./Components/CartPage/CartPage"
import MainPage from './Components/MainPage/MainPage';
import CategoryPage from './Components/CategoryPage/CategoryPage';
import CategoryList from './Components/CategoryPage/CategoryList'
import Sale from './Components/Salepage/Sale';
import Newitem from './Components/Newcollection/Newitem';
import Hoodies from './Components/HoodiesPage/Hoodies';
import Black from './Components/BlackCollection/Black';
import Forgotpassword from "./Components/ForgotPage/Forgotpassword";
import Signup from './Components/SignUpPage/Signup';
import Login from './Components/LoginPage/Login';
import BlackCategory from './Components/CategoryPage/BlackCategory';
import SummerCategory from './Components/CategoryPage/SummerCategory';
import ShoesCategory from './Components/CategoryPage/ShoesCategory';
import AccessoriesCategory from './Components/CategoryPage/AccessoriesCategory';
import NewCategory from './Components/CategoryPage/NewCategory';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/mainpage" element={<MainPage />} ></Route>
          <Route path="/category" element={<CategoryPage />} ></Route>
          <Route path="/subcategory" element={<CategoryList />} ></Route>
          <Route path="/sale" element={<Sale />} ></Route>
          <Route path="/newitems" element={<Newitem />} ></Route>
          <Route path="/hoodies" element={<Hoodies />} ></Route>
          <Route path="/black" element={<Black />} ></Route>
          <Route path="/catalog" element={<CatalogPage />} ></Route>
          <Route path="/filters" element={<FilterPage />} ></Route>
          <Route path="/productdetails" element={<ProductDetails />} ></Route>
          <Route path="/cart" element={<CartPage />} ></Route>
          <Route path="/favourite" element={<FavouritePageList />} ></Route>
          <Route path="/profile" element={<MyProfile />} ></Route>
          <Route path="/myorder" element={<MyOrder />} ></Route>
          <Route path="/orderdetails" element={<OrderDetail />} ></Route>
          <Route path="/settings" element={<Setting />} ></Route>
          <Route path="/brand" element={<BrandPage />} ></Route>
          <Route path="/Catalog2" element={<CatalogPage2 />} ></Route>
          <Route path="/Favouritegrid" element={<FavouriteGrid />} ></Route>
          <Route path="/review" element={<Review />} ></Route>
          <Route path="/forgotpassword" element={<Forgotpassword />} ></Route>
          <Route path="/blackcategory" element={<BlackCategory/>}></Route>
          <Route path="/summercategory" element={<SummerCategory/>}></Route>
          <Route path="/shoescategory" element={<ShoesCategory/>}></Route>
          <Route path="/newcategory" element={<NewCategory/>}></Route>
          <Route path="/accessoriescategory" element={<AccessoriesCategory/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
