import React from "react";
import {connect} from "react-redux"
import {personalDetailSuccess} from "../../const/action" 

let ContactUs = (props) => {
  console.log(props);
  return <div>
   this is me {props.personalinfo.personalDetail.name} {props.personalinfo.personalDetail.age}
   <button onClick={()=>{props.changeName({name:"dhiraj",age:30})}}>click</button>
  </div>;
};
const mapStateToProps = (state) => ({
  personalinfo:state.person
});

const mapDispatchToProps = (dispatch) => ({
  changeName:(data)=>dispatch({type:personalDetailSuccess,payload:data})

  
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
