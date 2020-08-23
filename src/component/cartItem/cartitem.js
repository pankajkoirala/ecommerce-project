//body container bata pass gareko xa

import React, { useState } from "react";
import { Formik } from "formik";
import {
  Label,
  Input,
  Form,
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
import { OrderValidator } from "../../utility/validation/orderform";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {
  let nonduplicate = props.cartItem;
  console.log(props.cartItem);

  return (
    <div className="cartitemfullpage">
      {/* order form */}
      <div>
        <Formik
          initialValues={{
            name: "",
            address: "",
            phoneNumber: "",
            information:"",
            order: nonduplicate,
          }}
          onSubmit={(values, actions) => {
            props.postitem(values);
          }}
          validationSchema={OrderValidator}
        >
          {({
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            isSubmitting,
          }) => (
            <div>
              {nonduplicate.length === 0 ? (
                <h3 className="text-center cartItemPleseSelect">
                  plese select some item
                </h3>
              ) : (
                <div>
                  <div className="d-flex justify-content-center">
                    <Form className="cartorderForm col-md-6">
                      <div className="h5 text-center font-weight-bold">
                        fill your detail
                      </div>
                      <div className="">
                        <Label> Name</Label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="enter your name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.name && errors.name && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.name}
                          </span>
                        )}
                      </div>
                      <div className="">
                        <Label> address</Label>
                        <Input
                          type="text"
                          name="address"
                          placeholder="enter your address"
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.address && errors.address && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.address}
                          </span>
                        )}
                      </div>
                      <div className="">
                        <Label> phoneNumber</Label>
                        <Input
                          type="number"
                          name="phoneNumber"
                          placeholder="enter your address"
                          value={values.phoneNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.phoneNumber && errors.phoneNumber && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.phoneNumber}
                          </span>
                        )}
                      </div>
                      <div className="">
                        <Label> information</Label>
                        <Input
                          type="text"
                          name="information"
                          placeholder="enter info like size color "
                          value={values.information}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.information && errors.information && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.information}
                          </span>
                        )}
                      </div>
                      <div className="font-weight-bold text-dark">
                        {props.respons}
                      </div>
                      <button
                        className="m-4"
                        type="button"
                        onClick={() => {
                          props.toastNreload();
                          handleSubmit();
                        }}
                      >
                        Place Order
                      </button>
                    </Form>
                  </div>

                  <div className=" flex-wrap  d-flex justify-content-start">
                    {nonduplicate.map((arg) => {
                      return (
                        <div className="cartitemcard">
                          <Card>
                            <CardImg
                              top
                              width="100%"
                              className="cartItemImage"
                              src={arg.product ? arg.product.photo : ""}
                              alt="Card image cap"
                            />
                            <CardBody>
                              <CardTitle>
                                {arg.product ? arg.product.productName : ""}
                              </CardTitle>
                              <CardSubtitle>
                                Rs. {arg.product ? arg.product.productCost : ""}
                              </CardSubtitle>
                              <div>No of items {arg.count}</div>
                              <div>
                                total cost : Rs
                                {arg.count * arg.product.productCost}
                              </div>
                              <Button
                              className="text-center"
                                onClick={() => {
                                  props.deletItem(arg.product._id);
                                }}
                              >
                            <FontAwesomeIcon icon={faTrashAlt}/> Delete
                              </Button>
                              <i class="fas fa-trash-alt"></i>
                            </CardBody>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </Formik>
      </div>
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
