import React,{useEffect,useState} from "react"
import axios from "axios"


const Rough=()=>{
  const[dataall,setDataall]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/post",{
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then((arg)=>setDataall(arg.data)).catch((err)=>err)
  },[])
  console.log(dataall);
  return(
    <div>hello world

 {dataall.map((arg)=>{
   return(
     <div>
     <img src={arg.photo_url} alt=""/><div>hello</div></div>
   )
 })}
    </div>
  )
}
export default  Rough