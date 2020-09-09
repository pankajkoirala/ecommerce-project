import React,{useEffect,useState} from "react"
import {read,deleteData} from "../../../axiosInstance/axiosService"
import FeedbackComp from "../../../component/adminpage.js/feedback/feedbackComp"

let Feedback=()=>{
  const[response,setResponse]=useState([])
useEffect(()=>{
  fetchData()
},[])

  const fetchData=()=>{
    read("/api/contactus").then((res)=> setResponse(res.data)
      
).catch((err)=>console.log(err) )
}
let deletfeedback=(Id)=>{
  deleteData(`/api/contactus/${Id}`)

}
  return(
    <div><FeedbackComp response={response}
    deletfeedback={deletfeedback}
    /></div>
  )
}
export default Feedback