import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Toast from "../../shared/notification/notification"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import "./categoryDisplay.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const ElectronicItem = (props) => {
  const [SelelectedData, setSelectedData] = useState([]);
  let allElect = props.allItem;

  const { category } = useParams();

  useEffect(() => {
    setSelectedData(allElect.filter((arg) => arg.category === category));
  }, [allElect, category]);

  return (
    <div className="fullelectronic d-flex flex-wrap d-flex justify-content-center">
      {SelelectedData.map((arg, index) => {
        return (
          <div key={index}>
            <Card className="fullcard ">
              <Link to={`${arg.category}/${arg.productName}/${arg._id}`}>
                <CardImg
                  className="electricItemImage"
                  src={arg ? arg.photo : ""}
                  alt="Card image cap"
                />
              </Link>
              <CardBody className="infomaterial">
                <CardTitle>{arg ? arg.productName : ""}</CardTitle>
                <CardSubtitle className="font-weight-bold">
                  Rs {arg ? arg.productCost : ""}
                </CardSubtitle>
                {/* <CardText>{arg ? arg.productDetail : ""}</CardText> */}
                <div
                className="m-1 addbutton text-center"
                onClick={() => {
                  props.addToCart(arg);
                  Toast("success", `${arg.productName} added to cart`);
                }}
              >
              <FontAwesomeIcon icon={faShoppingCart}/>
              </div>
              </CardBody>
           
            </Card>
          </div>
        );
      })}
    </div>
  );
};
export default ElectronicItem;
