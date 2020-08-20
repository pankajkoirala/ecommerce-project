import React, { useEffect, useState } from "react";
import ElectronicComp from "../../component/displayPage/categoryDisplay";
import Axios from "axios";
import { connect } from "react-redux";
import { addtoCart } from "../../const/action";
import {read} from "../../axiosInstance/axiosService"

const ElectronicItemCont = (props) => {
  const [allItem, setAllItem] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  let addToCart = (data) => {
    props.add(data);
  };

  const fetchData = () => {

      read("/api/ecommerce")
      .then((res) => {
        setAllItem(res.data);
      })
      .catch((err) => err);
  };

  return (
    <div>

      <ElectronicComp
       allItem={allItem}
      addToCart={addToCart}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  personalinfo: state.person,
});

const mapDispatchToProps = (dispatch) => ({
  add: (data) => dispatch({ type:addtoCart, payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ElectronicItemCont);
