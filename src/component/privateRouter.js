import React from "react"
import { Redirect, Route } from "react-router-dom";
import {getLocalStorage} from "../const/axiosConst/tokenStorage"
 
const PrivateRouter=({ component: Component, ...rest })=>{
  let authorize= getLocalStorage("token")

  return(
 <Route
 {...rest}
 render={(props)=>authorize?<Component {...props}/>:<Redirect to="/login"/>}/>


  )
}
export default PrivateRouter