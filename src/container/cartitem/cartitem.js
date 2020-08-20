import React from "react";
import CartitemComp from "../../component/cartItem/cartitem";
import axios from "axios"


let CartitemContainer = () => {
  const postitem = (data) => {
  
   
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/order',
      data: data,
      config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
      })
 
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <CartitemComp postitem={postitem} />
    </div>
  );
};
export default CartitemContainer;
