import React from "react";
import "./order.css"

const OrderItem = (props) => {
  let ALLorderlist = props.orderInfo;
  let date = ALLorderlist[0] ? ALLorderlist[0].date : "";
  console.log(ALLorderlist);
  return (
    <div className=" orderpage">
      {ALLorderlist.map((arg, index) => {
        return (
          <div key={index}>
            <div>
              <div>{arg.name}</div>
              <div>{arg.address}</div>
              <div>{arg.phoneNumber}</div>
              <div>{arg.date}</div>
            </div>
<div className="itemheading">
            <div className="row itemheading">
              <h5 className="col-sm-1 border border-dark">#</h5>
              <h5 className="col-sm-4 border border-dark">Product Name</h5>
              <h5 className="col-sm-2 border border-dark">Product Cost</h5>
              <h5 className="col-sm-2 border border-dark">no of item</h5>
              <h5 className="col-sm-2 border border-dark">Total Cost</h5>
              <h5 className="col-sm-1 border border-dark ">Product image</h5>
            </div>
            </div>

            <div>
              {arg.order.map((item, index) => {
                return (
                  <div key={index} className="row">
                    <div className="col-sm-1 border border-dark">{index}</div>
                    <div className="col-sm-4 border border-dark"><span>productName :</span>
                      {item.product.productName}
                    </div>
                    <div className="col-sm-2 border border-dark"><span>product Cost :</span>
                      Rs. {item.product.productCost}
                    </div>
                    <div className="col-sm-2 border border-dark"><span>no of item :</span>
                      {" "}
                      {item.count}
                    </div>
                    <div className="col-sm-2 border border-dark"><span>total Cost :</span>
                      Rs.{item.product.productCost * item.count}
                    </div>
                <div className="col-sm-1 border border-dark "><a href={item.product.photo} target={item.product.photo}> <img className="orderImg" src={item.product.photo} alt=""/> </a></div>
                  </div>
                );
              })}
            </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default OrderItem;
