/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./allItem.css";
import Toast from "../../../shared/notification/notification"

const AllItem = (props) => {

  let electronic = props.everyItem.filter(
    (arg) => arg.category === "electronic"
  );
  let household = props.everyItem.filter((arg) => arg.category === "household");
  let sport = props.everyItem.filter((arg) => arg.category === "sports");
  let fashion = props.everyItem.filter((arg) => arg.category === "fashion");
  let healthcare = props.everyItem.filter(
    (arg) => arg.category === "health-and-care"
  );

 
  return (
    <div>
      <div>
        <h4 className="text-center">Electronic Item</h4>

        <div className="fullitem ">
          {electronic.map((arg, index) => {
            if (index < 14) {
              return (
                <div key={index}>
                  <Card className="singleItem">
                    <Link to={`${arg.category}/${arg.productName}/${arg._id}`}>
                      {" "}
                      <CardImg
                        className="singleImage"
                        top
                        src={arg.photo}
                        alt="Card image cap"
                      />
                    </Link>
                    <CardBody>
                      <CardTitle className="font-weight-bold">
                        {arg.productName}
                      </CardTitle>
                      <CardSubtitle className="font-weight-bold">
                        Rs. {arg.productCost}
                      </CardSubtitle>
                    </CardBody>
                    <div id={arg._id}></div>
                    <button
                      className="m-1"
                      onClick={() => {
                        props.addToCart(arg);
                        Toast("success",`${arg.productName} added to cart` )
                      }}
                    >
                      add to cart
                    </button>
                  </Card>
                </div>
              );
            }
          })}
        </div>
        <div className=" loadmore ">
          <Link to="/electronic">load more</Link>
        </div>
      </div>
      <div>
        <div>
          <h4 className="text-center">Household Item</h4>
          <div className="fullitem ">
            {household.map((arg, index) => {
              if (index < 14) {
                return (
                  <div key={index}>
                    <Card className="singleItem">
                      <Link
                        to={`${arg.category}/${arg.productName}/${arg._id}`}
                      >
                        <CardImg
                          className="singleImage"
                          top
                          src={arg.photo}
                          alt="Card image cap"
                        />{" "}
                      </Link>
                      <CardBody>
                        <CardTitle className="font-weight-bold">
                          {arg.productName}
                        </CardTitle>
                        <CardSubtitle className="font-weight-bold">
                          Rs. {arg.productCost}
                        </CardSubtitle>
                      </CardBody>
                      <button
                        className="m-1"
                        onClick={() => {
                          props.addToCart(arg);
                          Toast("success",`${arg.productName} added to cart` )
                        }}
                      >
                        add to cart
                      </button>
                    </Card>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className=" loadmore ">
        <Link to="/household">load more</Link>
      </div>

      <div>
        <h4 className="text-center">Fashion</h4>
        <div className="fullitem ">
          {fashion.map((arg, index) => {
            if (index < 14) {
              return (
                <div key={index}>
                  <Card className="singleItem">
                    <Link to={`${arg.category}/${arg.productName}/${arg._id}`}>
                      <CardImg
                        className="singleImage"
                        top
                        src={arg.photo}
                        alt="Card image cap"
                      />{" "}
                    </Link>
                    <CardBody>
                      <CardTitle className="font-weight-bold">
                        {arg.productName}
                      </CardTitle>
                      <CardSubtitle className="font-weight-bold">
                        Rs. {arg.productCost}
                      </CardSubtitle>
                    </CardBody>
                    <button
                      className="m-1"
                      onClick={() => {
                        props.addToCart(arg);
                        Toast("success",`${arg.productName} added to cart` )
                      }}
                    >
                      add to cart
                    </button>
                  </Card>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className=" loadmore ">
        <Link to="/fashion">load more</Link>
      </div>
      <div>
        <h4 className="text-center">Sports Item</h4>
        <div className="fullitem ">
          {sport.map((arg, index) => {
            if (index < 14) {
              return (
                <div key={index}>
                  <Card className="singleItem">
                    <Link to={`${arg.category}/${arg.productName}/${arg._id}`}>
                      <CardImg
                        className="singleImage"
                        top
                        src={arg.photo}
                        alt="Card image cap"
                      />{" "}
                    </Link>
                    <CardBody>
                      <CardTitle className="font-weight-bold">
                        {arg.productName}
                      </CardTitle>
                      <CardSubtitle className="font-weight-bold">
                        Rs. {arg.productCost}
                      </CardSubtitle>
                    </CardBody>
                    <button
                      className="m-1"
                      onClick={() => {
                        props.addToCart(arg);
                        Toast("success",`${arg.productName} added to cart` )
                      }}
                    >
                      add to cart
                    </button>
                  </Card>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className=" loadmore ">
        <Link to="/sports">load more</Link>
      </div>
      <div>
        <h4 className="text-center">Health & Care</h4>
        <div className="fullitem ">
          {healthcare.map((arg, index) => {
            if (index < 14) {
              return (
                <div key={index}>
                  <Card className="singleItem">
                    <Link to={`${arg.category}/${arg.productName}/${arg._id}`}>
                      {" "}
                      <CardImg
                        className="singleImage"
                        top
                        src={arg.photo}
                        alt="Card image cap"
                      />
                    </Link>
                    <CardBody>
                      <CardTitle className="font-weight-bold">
                        {arg.productName}
                      </CardTitle>
                      <CardSubtitle className="font-weight-bold">
                        Rs. {arg.productCost}
                      </CardSubtitle>
                    </CardBody>
                    <button
                      className="m-1"
                      onClick={() => {
                        props.addToCart(arg);
                        Toast("success",`${arg.productName} added to cart` )
                      }}
                    >
                      {" "}
                      add to cart
                    </button>
                  </Card>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className=" loadmore ">
        <Link to="/health-and-care">load more</Link>
      </div>
    </div>
  );
};
export default AllItem;
