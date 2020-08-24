import React from "react";
import "./contact.css";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import {ContactformValidator} from "../../utility/validation/contactFormValidator"

let ContactUsComp = (props) => {
  console.log(props);
  return (
    <div className="contactusfullPage">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          aboutYou: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={ContactformValidator}
      >
        {({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          setFieldValue,
          isSubmitting,
        }) => (
          <Form>
            <div className="contextTextHeading">
              <div className="contextText">
                <h3>Let's Connect</h3>
                <h5>We'd love to help you start exceeding your CX goal</h5>
                <FormGroup className="">
                  <div className="d-flex justify-content-center">
                    <div>
                      <div className="">
                        <Label className="font-weight-bold " for="exampleZip">
                          First Name
                        </Label>
                        <Input
                          type="text"
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.firstName && errors.firstName && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.firstName}
                          </span>
                        )}
                      </div>
                      <div className="">
                        <Label className="font-weight-bold " for="exampleZip">
                          Last Name
                        </Label>
                        <Input
                          type="text"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.lastName && errors.lastName && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.lastName}
                          </span>
                        )}
                      </div>
                      <div className="">
                        <Label className="font-weight-bold " for="exampleZip">
                          Email
                        </Label>
                        <Input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.email && errors.email && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.email}
                          </span>
                        )}
                      </div>
                      <div className="">
                        <Label className="font-weight-bold " for="exampleZip">
                          anout you
                        </Label>
                        <Input
                          type="text"
                          name="aboutYou"
                          value={values.aboutYou}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.aboutYou && errors.aboutYou && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.aboutYou}
                          </span>
                        )}
                      </div>

                      <div className="text-success font-weight-bold">
                        {props.response}
                      </div>
                      <div
                        className="contactusButton"
                        type="button"
                        onClick={() => {
                          handleSubmit();
                        }}
                      >
                        submit
                      </div>
                    </div>
                  </div>
                </FormGroup>
              </div>
            </div>

            <iframe
              className="contactMap"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1765.666203072652!2d85.30904167800557!3d27.737891548348962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18d994b9c0bf%3A0x712743cc19fb848f!2sTarkeshwar%20Mahadev%20Temple!5e0!3m2!1sen!2snp!4v1598254708402!5m2!1sen!2snp"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUsComp;
