import * as Yup from "yup";

export const inputformValidator = Yup.object().shape({
  productName: Yup.string()
  .min(2, "Too Short!")
  .max(50, "Too Long!").required("Required"),
  productCost: Yup.number().min(2, "Too Short!")
  .max(99999, "Too Long!").required("Required"),
  productDetail:Yup.string().min(2, "Too Short!")
  .max(200, "Too Long!").required("Required"),
  warranty: Yup.string().oneOf(["not available","year","one years","two years","three years","four years","five years","six years","seven years","eight years","nine years","ten years","fifteen years","twenty years"]).required("Required"),
  category: Yup.string().oneOf(["electronic","household","sports","fashion","health-and-care"]).required("Required"),
   
});
