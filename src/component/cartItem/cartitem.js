//body container bata pass gareko xa

import React from "react";
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
import { orderValidator } from "../../utility/validation/orderform";

const CartItem = (props) => {
  let nonduplicate = props.cartItem.filter((item, index, inputArray) => {
    return inputArray.indexOf(item) === index;
  });
  console.log(nonduplicate);
  return (
    <div className="cartitemfullpage">
      {/* order form */}
      <div>
        <Formik
          initialValues={{
            name: "",
            address: "",
            phoneNumber: "",
            order: nonduplicate,
          }}
          onSubmit={(values, actions) => {
            props.postitem(values);
          }}
          validationSchema={orderValidator}
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
                <h3 className="text-center">plese select some item</h3>
              ) : (
                <div className=" flex-wrap  d-flex justify-content-center">
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

                  <Form>
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
                    <button type="button" onClick={handleSubmit}>Place Order</button>
                  </Form>
                </div>
              )
              }
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
