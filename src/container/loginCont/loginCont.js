import React,{useState} from "react"
import LoginComponent from "../../component/loginFormcomp/logincomp"
import Axios from "axios"
import {base_URL,} from "../../const/axiosConst/baseURL"
import {setLocalStorage} from "../../const/axiosConst/tokenStorage"

const LoginContainer=()=>{
  const[response,setResponse]=useState("")
  const login=(data)=>{
    Axios({
      method: 'post',
      url: base_URL+'/api/login',
      data: data,
      config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
      }).then((res)=>{
        setResponse(res.data.message);
        setLocalStorage("token",res.data.token)
        console.log(res.data);
    }).catch((err)=>{
      setResponse("username and password doesnt match");
    })
  
  }
  return(
    <LoginComponent login={login}
    response={response}
    />
  )
}
export default LoginContainer
