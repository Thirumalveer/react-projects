// import React, { useContext, useState } from "react";
// import "./Cart.css";
// import { StoreContext } from "../../../context/StoreContext";
// import Payment from "../../Razerpay/Payment"
// function Cart() {
//  const{cartItems,food_list,removeFromCart,getToatalCartAmount}=useContext(StoreContext)
//  const[pay,setpay]=useState(false)
//  const totalcart = getToatalCartAmount()+2
// //  console.log(Object.keys(cartItems).length)

//    const paymentHandler=(e)=>{

//           //  setpay(true)
//           e.preventDefault()

//           console.log("hiiii")

//         if(totalcart ===""){
//             alert("please enter amount")
//         }
//         else{
//            var options={

//              key:"rzp_test_xlTyRoWRSQUHvQ",
//         key_secret:"zxSjuwsa0FDF9T0cpTKmtQKu",
//         amount:totalcart*100,
//         currency:"INR",
//         name:"YUMMY_DELIVERY_APP",
//         description:"for testing purpose",
//  handler: function(response){

//       alert(response.razorpay_payment_id)
//  },
//    prefill:{
//     name:"thirumalarao",
//     email:"thirumal.veer219@gmail.com",
//     contact:"9603962762"
//    },
//    notes:{
//        address:"Razorpay corporate office",

//    },
//    theme:{
//     color:"#3399cc"
//    }


//            };

//     var pay =new window.Razorpay(options);
//     pay.open()

//         }
// }
   
 
//   return (
//     <div className="cart">
//       <div className="cart-items">
//         <div className="cart-items-title">  
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {
//           Object.keys(cartItems).length===0?<center><h5>Cart is empty</h5></center>:

          
//         food_list.map((item,index)=>{
//           // console.log(food_list)
//           if(cartItems[item._id] >0){

//               //  console.log(item)
//             return(
//              <div>
// <div className="cart-items-title cart-items-item">
//               <img src={item.image} alt="" />
//               <p>{item.name}</p>
//               <p>₹{item.price}</p>
//               <p>{cartItems[item._id]}</p>
//               <p>₹{item.price*cartItems[item._id]}</p>
//               <p onClick={()=>removeFromCart(item._id)} className="cross">x</p>
//               </div>
//               <hr />
//              </div>
//             )
//           }
//         })}
//       </div>
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Total Amount</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>{getToatalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>{getToatalCartAmount()===0?0:2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>{getToatalCartAmount()===0?0:totalcart}</b>
//             </div>
//           </div>
//           {/* <button onClick={paymentHandler}>{pay?<Payment/>:"PROCEED TO PAY"}</button> */}
//           <button onClick={paymentHandler} >Pay</button>
         
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>If you have promocode enter it here.........</p>
//             <div className="cart-promocode-input">
//               <input type="text"  placeholder="promocode "/>
//               <button>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;


import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../../context/StoreContext";
import Payment from "../../Razerpay/Payment";

function Cart() {
  const { cartItems, food_list, removeFromCart, getToatalCartAmount, clearCart } = useContext(StoreContext); // Assume `clearCart` is provided from context.
  const [pay, setPay] = useState(false);
  const totalcart = getToatalCartAmount() + 2;

  const paymentHandler = (e) => {

    Object.keys(cartItems).length === 0 ? alert("Cart is empty") : e.preventDefault();
    // e.preventDefault();

    if (totalcart === 2) {
   
    } else {
      const options = {
        key: "rzp_test_xlTyRoWRSQUHvQ",
        key_secret: "zxSjuwsa0FDF9T0cpTKmtQKu",
        amount: totalcart * 100, // Amount in paise
        currency: "INR",
        name: "YUMMY_DELIVERY_APP",
        description: "For testing purpose",
        handler: function (response) {
          // alert(response.razorpay_payment_id);
        //  alert ("");
          // Clear the cart after successful payment
          clearCart();
        },
        prefill: {
          name: "thirumalarao",
          email: "thirumal.veer219@gmail.com",
          contact: "9603962762",
        },
        notes: {
          address: "Razorpay corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const pay = new window.Razorpay(options);
      pay.open();
    }
  };

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
        {Object.keys(cartItems).length === 0 ? (
          <center>
            <h5>Cart is empty</h5>
          </center>
        ) : (
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id}>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>₹{item.price * cartItems[item._id]}</p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="cross"
                    >
                      x
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })
        )}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Total Amount</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getToatalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getToatalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getToatalCartAmount() === 0 ? 0 : totalcart}</b>
            </div>
          </div>
          <button onClick={paymentHandler}>Pay</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode, enter it here...</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
