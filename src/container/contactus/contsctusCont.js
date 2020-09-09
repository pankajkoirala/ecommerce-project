import React,{useState} from "react";
import ContactUsComp from "../../component/contactus/contactUs"
import axios from "axios"
import {base_URL} from "../../const/axiosConst/baseURL"

let ContactUs = (props) => {
  const[contactres,setContactres]=useState("")
  const[feedbackres,setFeedbackres]=useState({})
  let contactus=(data)=>{
    
    axios({
      method: 'post',
      url: base_URL+"/api/contactus",
      data: data,
      config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
      })
  
      .then((res) => {
        setContactres(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log(contactres);

  //email js


  
  return <div><ContactUsComp contactus={contactus}/></div>;
};

export default ContactUs;
