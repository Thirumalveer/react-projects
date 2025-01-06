import { useState } from "react"
import "./Payment.css"
const Payment=()=>{

const[amount,setamount]=useState("")
    
const submitHandler=(e)=>{
      e.preventDefault()

        if(amount ===""){
            alert("please enter amount")
        }
        else{
           var options={

             key:"rzp_test_xlTyRoWRSQUHvQ",
        key_secret:"zxSjuwsa0FDF9T0cpTKmtQKu",
        amount:amount*100,
        currency:"INR",
        name:"YUMMY_DELIVERY_APP",
        description:"for testing purpose",
 handler: function(response){

      alert(response.razorpay_payment_id)
 },
   prefill:{
    name:"thirumalarao",
    email:"thirumal.veer219@gmail.com",
    contact:"9603962762"
   },
   notes:{
       address:"Razorpay corporate office",

   },
   theme:{
    color:"#3399cc"
   }


           };

    var pay =new window.Razorpay(options);
    pay.open()

        }
}
    return(
        <div className="paymentcard">

  <input type="text" placeholder="Enter amount" value={amount}  onChange={(e)=>setamount(e.target.value)}/>
  <br />
  <button onClick={submitHandler}>Submit</button>
        </div>
    )
}


export default Payment