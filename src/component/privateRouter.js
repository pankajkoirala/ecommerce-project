import React, { Component, useState } from "react"
import { Redirect, Route } from "react-router-dom";

const PrivateRouter=({ component: Component, ...rest })=>{
 const[authorize,setAuthorize]=useState(true)

  return(
 <Route
 {...rest}
 render={(props)=>authorize?<Component {...props}/>:<Redirect to="/login"/>}/>


  )
}
export default PrivateRouter