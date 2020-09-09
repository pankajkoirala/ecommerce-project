import React from "react";
import "./order.css";
import Toast from "../../../shared/notification/notification";
import { reloadPage } from "../../../shared/refreshPage";

const OrderItem = (props) => {
  let ALLorderlist = props.orderInfo;
  console.log(ALLorderlist);

  return (
    <div className=" orderpage">
      {ALLorderlist.length === 0 ? (
        <h2 className="text-center orderItemNoOrder">No order Placed</h2>
      ) : (
        ALLorderlist.map((arg, index) => {
          //total cost of ordered items
          let cost = 0;
          arg.order.map((item) => {
            cost = cost + (item.product.productCost*item.count);
          });
          return (
            <div key={index}>
              <div className="mt-4 d-flex justify-content-between d-flex flex-wrap">
                <h5>Name: {arg.name}</h5>
                <h5>Address: {arg.address}</h5>
                <h5>Phone No. {arg.phoneNumber}</h5>
                <h5>Date: {new Date(arg.date).toDateString()}</h5>
                <button
                  className="m-1"
                  onClick={() => {
                    props.deleteOrder(arg._id);
                    Toast("info", "order deleted");
                    reloadPage();
                  }}
                >
                  delete order
                </button>
              </div>
              <div className="itemheading">
                <div className="row itemheading">
                  <h5 className="col-sm-1 border border-dark">#</h5>
                  <h5 className="col-sm-5 border border-dark">Product Name</h5>
                  <h5 className="col-sm-2 border border-dark">Product Cost</h5>
                  <h5 className="col-sm-1 border border-dark">no of item</h5>
                  <h5 className="col-sm-2 border border-dark">Total Cost</h5>
                  <h5 className="col-sm-1 border border-dark ">
                    Product image
                  </h5>
                </div>
              </div>

              <div>
                {arg.order.map((item, index) => {
                  return (
                    <div key={index} className="row allproductdetail">
                      <div className="col-sm-1 border border-dark">{index}</div>
                      <div className="col-sm-5 border border-dark">
                        <span>productName : </span>
                        {item.product.productName}
                      </div>
                      <div className="col-sm-2 border border-dark">
                        <span>product Cost :</span>
                        Rs. {item.product.productCost}
                      </div>
                      <div className="col-sm-1 border border-dark">
                        <span>no of item :</span> {item.count}
                      </div>
                      <div className="col-sm-2 border border-dark">
                        <span>total Cost :</span>
                        Rs. {item.product.productCost * item.count}
                      </div>
                      <div className="col-sm-1 border border-dark ">
                        <a
                          href={item.product.photo}
                          target={item.product.photo}
                        >
                          <img
                            className="orderImg"
                            src={item.product.photo}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-sm-12 border border-dark h6 infoofOrder">information : {arg.information}</div>
              <div className=" col-sm-3 border border-dark totalcost h5">totalcost: Rs.{cost}/-</div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default OrderItem;
