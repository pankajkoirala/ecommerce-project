//body container bata pass gareko xa

import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./cart.css";
import { connect } from "react-redux";
import { delettoCart } from "../../const/action";

const CartItem = (props) => {
  let nonduplicate = props.cartItem.filter((item, index, inputArray) => {
    return inputArray.indexOf(item) === index;
  });


  return (
    <div className="cartitemfullpage">
      {nonduplicate.length === 0 ? (
        <h3 className="text-center">plese select some item</h3>
      ) : (
        <div className=" flex-wrap  d-flex justify-content-start">
          {nonduplicate.map((arg) => {
            return (
              <div className="cartitemcard">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    className="cartItemImage"
                    src={arg.product?arg.product.photo:""}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{arg.product?arg.product.productName:""}</CardTitle>
                    <CardSubtitle>Rs. {arg.product?arg.product.productCost:""}</CardSubtitle>
                    <div>No of items {arg.count}</div>
            <div>total cost : Rs{arg?arg.count:"" *arg.product?arg.product.productCost:""}</div>
                    <Button
                      onClick={() => {
                        props.deletItem(arg.product._id);
                      }}
                    >
                      Remove items
                    </Button>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItem: state.cart.items,
});

const mapDispatchToProps = (dispatch) => ({
  deletItem: (data) => dispatch({ type: delettoCart, payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
