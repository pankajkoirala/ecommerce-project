import React from "react";
import CartitemComp from "../../component/cartItem/cartitem";
import axios from "axios"
import { useState } from "react";


let CartitemContainer = () => {
  const[respons,setRespons]=useState("")
  const postitem = (data) => {
  
   
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/order',
      data: data,
      config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
      })
 
      .then((res) => {
        setRespons(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let toastNreload = () => {
   setTimeout(() => {
     setRespons("")
     window.location.reload()}, 2000);
  
};

  return (
    <div>
      <CartitemComp postitem={postitem}
      toastNreload={toastNreload}
      respons={respons} />
    </div>
  );
};
export default CartitemContainer;
