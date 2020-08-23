import * as Yup from "yup";

export const OrderValidator = Yup.object().shape({
  name: Yup.string()
  .min(2, "Too Short!")
  .max(50, "Too Long!").required("Required"),
  address: Yup.string().min(2, "Too Short!")
  .max(99999, "Too Long!").required("Required"),
  phoneNumber:Yup.number()
  .required("Required"),
  information:Yup.string().min(2, "Too Short!")
  .max(50, "Too Long!").required("Required"),

});

// name: "",
// address: "",
// phoneNumber: "",
// order: nonduplicate,