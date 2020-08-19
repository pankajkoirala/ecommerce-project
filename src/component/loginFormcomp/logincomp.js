import React from "react";
import "./login.css";
import { Formik } from "formik";
import {  FormGroup, Label, Input, Form } from "reactstrap";
import {LoginValidator} from "../../utility/validation/loginValidation"

const ImportItemComponent = (props) => {
  return (
    <div className="fulllogin">
      <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={LoginValidator}
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
            <Form className="d-flex justify-content-center ">
              <FormGroup className=" loginform">
                <h5 className="text-left m-4">
                 plese login
                </h5>

                <div className="email">
                  <Label for="exampleCity">email</Label>
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

                <div className="password">
                  <Label for="exampleCity">password</Label>
                  <Input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.password}
                    </span>
                  )}
                </div>
                <button onClick={handleSubmit}>submit</button>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default ImportItemComponent;
