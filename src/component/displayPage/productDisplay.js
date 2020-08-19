import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDisplay.css";
import Toast from "../../shared/notification/notification"

const ProductDisplayPage = (props) => {
  const [product, setProduct] = useState([]);

  let serverData = props.allItem;
  const { category, productName, _id } = useParams();
  useEffect(() => {
    serverData.filter(
      (arg) =>
        arg.category + "/" + arg.productName + "/" + arg._id ===
        category + "/" + productName + "/" + _id
    );
    setProduct(serverData.filter((arg) => arg._id === _id));
  }, [_id, category, productName, serverData]);

  return (
    <div className=" productdisplay">
      {product.map((arg, index) => {
        return (
          <div
            key={index}
            className="d-flex justify-content-between d-flex flex-wrap"
          >
            <div className="productimgDiv">
              <img className="productImage " src={arg.photo} alt="" />
            </div>
            <div className="productdetail ">
              <h2>{arg.productName}</h2>
              <h4>Product info:{arg.productDetail}</h4>

              <h4>Home Delivery: Available</h4>
              <h4>Warranry: yes/no</h4>
              <h2>Cost only Rs.{arg.productCost}</h2>
              <button
                className="m-1 addbuybutton"
                onClick={() => {
                  props.addToCart(arg);
                  Toast("success", `${arg.productName} added to cart`);
                }}
              >
                add to cart
              </button>
            </div>
            <div className=" deliveryOption">
              <div>
                <div>
                  <h2>Delivery option</h2>
                  <h5>Bagmati,Kathmandu</h5>
                  <h5>22-Newroad Area</h5>
                </div>
                <div>
                  <h2>Home Delivery</h2>
                  <h5>delivery within 2-5 days</h5>
                  <h5>Delivery Cost: Rs.150</h5>
                </div>
                <div>
                  <h2>Payment Option</h2>
                  <h5>We accept both cash as well as cards</h5>
                </div>
                <div>
                  <h2>Return & Warranry</h2>
                  <h5>10 days easy return</h5>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductDisplayPage;
