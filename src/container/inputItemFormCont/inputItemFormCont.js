import React,{useState} from "react"
import ImportItemComp from "../../component/inputItemForm/inputItemComp"
import Axios from "axios"

const ImportItemContainer=()=>{
  const[response,setResponse]=useState("hello")
 
let responseErse=()=>{
setResponse("")
}



console.log(response);
  
const postitem=(data)=>{
  const formData = new FormData();
  formData.append("category", data.category);
  formData.append("productName", data.productName);
  formData.append("productCost", data.productCost);
  formData.append("productDetail", data.productDetail);
  formData.append("warranty", data.warranty);
  formData.append("photo", data.photo);


  Axios.post(`http://localhost:8000/api/ecommerce`,formData,{
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }).then((res)=>{
setResponse(res.data);
  }).catch((err)=>{
    console.log(err);
  })

}


  
  return(
    <div>

      <ImportItemComp 
      postitem={postitem} 
      response={response}
      responseErse={responseErse}
      />
    </div>
  )
}
export default ImportItemContainer