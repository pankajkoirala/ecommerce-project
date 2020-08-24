import * as Yup from "yup";

export const ContactformValidator = Yup.object().shape({
  firstName: Yup.string()
  .min(2, "Too Short!")
  .max(50, "Too Long!").required("Required"),
  lastName: Yup.string().min(2, "Too Short!")
  .max(99999, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  aboutYou: Yup.string()
  .min(2, "Too Short!")
  .max(500, "Too Long!").required("Required"),
   
});
