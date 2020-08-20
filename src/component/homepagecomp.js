import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./home.css";

import NavBar from "../shared/navbar/navbarMenu";
import NavebarUpper from "../shared/navbar/navbarUpper";
import Footer from "../shared/footer/Footer";
import ImportItemContainer from "../container/inputItemFormCont/inputItemFormCont";
import LoginContainer from "../container/loginCont/loginCont";
import DisplayCategory from "../container/displayPageCont/categoryDisplayCont";
import ProductDisplay from "../container/displayPageCont/productDisplayCont";
import DashainOffer from "../shared/dashainoffer";
import BodyCont from "../container/bodyCont/bodyCont";
import PrivateRouter from "./privateRouter";
import ContactUs from "../container/contactus/contsctusCont";
import CartDisplayCont from "../container/cartitem/cartitem";
import OrderItemCont from "../container/orderItemCont/orderitem";

const HomepageComponent = (props) => {
  return (
    <div>
      <Router>
        <NavebarUpper />
        {/* <DashainOffer/> */}
        <nav>
          <NavBar />
        </nav>
        <Switch>
          <Route exact path="/" component={BodyCont} />
          <PrivateRouter
            exact
            path="/inputitem"
            component={ImportItemContainer}
          />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/cartitems" component={CartDisplayCont} />
          <Route exact path="/orderlist" component={OrderItemCont} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/:category" component={DisplayCategory} />
          <Route
            exact
            path="/:category/:productName/:_id"
            component={ProductDisplay}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default HomepageComponent;
