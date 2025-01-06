import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {


   const[cartItems,setCartItems]=useState({})
   const[login,setLogin]=useState(false)

   const clearCart = () => {
    setCartItems({});
  };



   const addToCart=(itemId)=>{

   if(!cartItems[itemId]){
    setCartItems((prev)=>({...prev,[itemId]:1}))
   }
   else{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId] +1}))
   }

   }

   const removeFromCart=(itemId)=>{

    setCartItems((prev)=>({...prev,[itemId]:prev[itemId] -1}))
   }



     const getToatalCartAmount=()=>{

             let totalAmount=0;
              for(const item in cartItems){
                if(cartItems[item] >0){

                   let itemInfo= food_list.find((product)=>product._id===item);
                   totalAmount+=itemInfo.price*cartItems[item];
                }
              }
              return totalAmount;

     }


// console.log(props)
     const contextvalue={
     food_list,
     cartItems,
     setCartItems,
     addToCart,
     removeFromCart,
     login,
     setLogin,
     getToatalCartAmount,
     clearCart

     }
  return (
    <StoreContext.Provider value={contextvalue}>
      {props.children}
    </StoreContext.Provider>
  );
}


export default StoreContextProvider;