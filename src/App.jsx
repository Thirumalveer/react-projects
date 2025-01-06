import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import CarT from "./components/pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import PlaceOrder from "./components/pages/placeorder/PlaceOrder";
import ExploreMenu from "./components/ExploreMenu/ExploreMenu";

const App = () => {

   const[showLogin, setShowLogin] =useState(false)


  return (
   <>
   { showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
   <div className="app">
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
       < Route path="/ExploreMenu" element={<ExploreMenu />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/cart" element={<CarT />} />
      </Routes>
    </div>
    <Footer/>
 
   </>
  );
};

export default App;
