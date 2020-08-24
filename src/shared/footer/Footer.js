import React from "react";
import "./footer.css";
import fb from "../../assets/socialmedia/facebook.png";
import wa from "../../assets/socialmedia/whatsapp.png";
import tt from "../../assets/socialmedia/twiter.png";
import gm from "../../assets/socialmedia/gmail.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="footer d-flex flex-wrap d-flex justify-content-between">
        <div className=" location col-md-5 d-flex justify-content-center">
          <div className="allcontact">
          <div className="font-weight-bold my-3">
            <FontAwesomeIcon className="mx-2" icon={faMapMarkerAlt} />
            location rtrtyertyer
          </div>
          <div className="font-weight-bold my-3">
            <FontAwesomeIcon className="mx-2" icon={faPhoneAlt} /> +977 9843765501
          </div>
          <div className="font-weight-bold my-3">
            <FontAwesomeIcon className="mx-2" icon={faEnvelope} /> Support@gmail.com
          </div>
          </div>
        </div>

        <div className="aboutcompany col-md-5  d-flex justify-content-center">
          <div className="text">
            <h5>About the company</h5>
            <div>
              A company overview (also known as company information or a company
              summary) is an essential part of a business plan. It's an overview
              of the most important points about your company—your history,
            </div>
            <div className="d-flex justify-content-center">
              <img className="socialmedia" src={fb} alt="" />
              <img className="socialmedia" src={wa} alt="" />
              <img className="socialmedia" src={gm} alt="" />
              <img className="socialmedia" src={tt} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
