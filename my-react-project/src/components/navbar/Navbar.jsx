import React, { useContext, useState } from 'react'
import "./Navbar.css"
import {assets} from "../../assets/assets"
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'


const Navbar = ({setShowLogin}) => {
 const Context=useContext(StoreContext)
 console.log(Context)
    const[menu,setmenu] =useState("menu")

    const clickHandler=()=>{
      Context.setLogin(false)
    }
    
  return (
    <div className='navbar'>
    <Link to='/'> <img src={assets.foodie} alt="" className="logo" /></Link>
     <ul className="navbar-menu">
        <Link to='/' onClick={()=>{setmenu("home")}} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>{setmenu("menu")}} className={menu==="menu"?"active":""}>menu</a>
       {/* <Link to ='/ExploreMenu' onClick={()=>{setmenu("menu")}} className={menu==="menu"?"active":""} >menu</Link> */}
        <a  href="#app-download"  onClick={()=>{setmenu("mobile-app")}} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href="#footer" onClick={()=>{setmenu("contact us")}} className={menu==="contact us"?"active":""}>contact us</a>
     </ul>
     <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="" /> */}
        <div className="navbar-search-icon">
           <Link to='/cart'> <img src={assets.basket_icon} alt="" /> </Link>
            <div className={Context.getToatalCartAmount()===0?"":"dot"}></div>
        </div>
        {
            Context.login? <button onClick={clickHandler}>Logout</button>:<button onClick={()=>setShowLogin(true)}>sign in</button>
        }
       
     </div>
    </div>
  )
}

export default Navbar
