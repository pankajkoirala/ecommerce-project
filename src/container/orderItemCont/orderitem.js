import React,{useEffect,useState} from "react"
import OrderItemComp from "../../component/orderItem/orderItem"
import {read} from "../../axiosInstance/axiosService"

const OrderItemCont=()=>{
  const[orderInfo,setOrderinfo]=useState([])
useEffect(()=>{
  orderList()
},[])

let orderList=()=>{
  read("/api/order").then((res) => {
   setOrderinfo(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
}

  return(
    <div><OrderItemComp
    orderInfo={orderInfo}
    /></div>
  )
}

export default OrderItemCont