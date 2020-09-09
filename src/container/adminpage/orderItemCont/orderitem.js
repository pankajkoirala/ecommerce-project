import React,{useEffect,useState} from "react"
import OrderItemComp from "../../../component/adminpage.js/orderItem/orderItem"
import {read,deleteData} from "../../../axiosInstance/axiosService"

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
let deleteOrder=(id)=>{
deleteData(`/api/order/${id}`).then((res)=>console.log(res)).catch((err)=>console.log(err))
}
//reversing array to maintain order at top
let reverseInfo=[]
 for (let i=orderInfo.length-1; i>=1 ; i--) {

  reverseInfo.push(orderInfo[i]);

 }



  return(
    <div><OrderItemComp
    orderInfo={reverseInfo}
    deleteOrder={deleteOrder}
    /></div>
  )
}

export default OrderItemCont