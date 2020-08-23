import React from "react";
import "./inputItem.css";
import { Formik } from "formik";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { inputformValidator } from "../../utility/validation/inputItemvalidation";

const ImportItemComponent = (props) => {
  return (
    <div className="fullinputpage">
      <div className="showMaterialInputbox">
        <Formik
          initialValues={{
            category: "",
            productName: "",
            productCost: "",
            productDetail: "",
            warranty: "",
            photo: "",
          }}
          onSubmit={(values) => {
            props.postitem(values);
            console.log(values);
          }}
          validationSchema={inputformValidator}
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
            <Form className="d-flex justify-content-center ">
              <FormGroup className=" iteminput">
                <h5 className="text-left m-4 font-weight-bold text-white">
                  All Candidate Must Fillup All Information
                </h5>

                <div>
                  <Label className="font-weight-bold text-white" for="exampleSelect">Category</Label>
                  <Input
                    type="select"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option>select</option>
                    <option value="electronic">electronic</option>
                    <option value="household">household</option>
                    <option value="sports">sports</option>
                    <option value="fashion">fashion</option>
                    <option value="health-and-care">health and care</option>
                  </Input>
                  {touched.category && errors.category && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.category}
                    </span>
                  )}
                </div>
                <div className="">
                  <Label className="font-weight-bold text-white" for="exampleCity">productName</Label>
                  <Input
                    type="text"
                    name="productName"
                    value={values.productName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.productName && errors.productName && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.productName}
                    </span>
                  )}
                </div>

                <div className="">
                  <Label className="font-weight-bold text-white" for="exampleCity">productCost</Label>
                  <Input
                    type="text"
                    name="productCost"
                    value={values.productCost}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.productCost && errors.productCost && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.productCost}
                    </span>
                  )}
                </div>

                <div className="">
                  <Label className="font-weight-bold text-white" for="exampleZip">productDetail</Label>
                  <Input
                    type="text"
                    name="productDetail"
                    value={values.productDetail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.productDetail && errors.productDetail && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.productDetail}
                    </span>
                  )}
                </div>
                <div>
                  <Label className="font-weight-bold text-white" for="exampleSelect">warranty</Label>
                  <Input
                    type="select"
                    name="warranty"
                    value={values.warranty}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option>select</option>
                    <option value="not available">not available</option>
                    <option value="year">year</option>
                    <option value="one years">one years</option>
                    <option value="two years">two years</option>
                    <option value="three years">three years</option>
                    <option value="four years">four years</option>
                    <option value="five years">five years</option>
                    <option value="six years"> six years</option>
                    <option value="seven years">seven years</option>
                    <option value="eight years">eight years</option>
                    <option value="nine years">nine years</option>
                    <option value="ten years">ten years</option>
                    <option value="fifteen years">fifteen years</option>
                    <option value="twenty years">twenty years</option>
                  </Input>
                  {touched.warranty && errors.warranty && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.warranty}
                    </span>
                  )}
                </div>

                <div className="mt-4 mb-4">
                  <Label className="font-weight-bold text-white">Product Photo</Label>
                  <Input
                  className="text-white "
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(event) => {
                      setFieldValue("photo", event.currentTarget.files[0]);
                    }}
                  />

                  {touched.pic && values.pic && (
                    <img
                      src={URL.createObjectURL(values.pic)}
                      alt="no pic"
                      height="200"
                    />
                  )}
                </div>
                <div className="text-success font-weight-bold">
                  {props.response}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    handleSubmit();
                    setTimeout(() => {
                      props.responseErse();
                      handleReset();
                    }, 8000);
                  }}
                >
                  submit
                </button>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default ImportItemComponent;
