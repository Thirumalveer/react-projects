import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../../context/StoreContext";
function Cart() {
 const{cartItems,food_list,removeFromCart}=useContext(StoreContext)
//  console.log(Object.keys(cartItems).length)
 
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">  
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          Object.keys(cartItems).length===0?<center><h5>Cart is empty</h5></center>:
        food_list.map((item,index)=>{
          // console.log(food_list)
          if(cartItems[item._id] >0){

              //  console.log(item)
            return(
             <div>
<div className="cart-items-title cart-items-item">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price*cartItems[item._id]}</p>
              <p onClick={()=>removeFromCart(item._id)} className="cross">x</p>
              </div>
              <hr />
             </div>
            )
          }
        })}
      </div>
    </div>
  );
}

export default Cart;
