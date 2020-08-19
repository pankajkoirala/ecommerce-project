import React,{useState,useEffect} from "react"
import Bodycomponent from "../../component/body/body"
import Axios from "axios"
import { connect } from "react-redux";
import { addtoCart } from "../../const/action";

const BodyCont=(props)=>{
  const[allItem,setAllItem]=useState([])
  useEffect(()=>{
    fetchData()
  
  },[])

  let addToCart = (data) => {
    props.add(data);
  };
  
  const fetchData=()=>{
    Axios.get("http://localhost:8000/api/ecommerce").then((res)=>{
    setAllItem(res.data)
  }).catch((err)=>err)
  }
  
  return(
<div>
  <Bodycomponent allItem={allItem}
  addToCart={addToCart}
  />
</div>
  )
}
const mapStateToProps = (state) => ({
  personalinfo: state.person,
});

const mapDispatchToProps = (dispatch) => ({
  add: (data) => dispatch({ type:addtoCart, payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BodyCont);