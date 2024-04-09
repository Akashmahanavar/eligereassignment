import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useData } from "../utils/Context";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  mobileNumber: Yup.string()
    .matches(/^[0-9]+$/, "Mobile number must only contain digits")
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  checked: Yup.array()
    .min(1, "Select at least one Event")
    .required("Select at least one Event"),
});

const UserForm = () => {
  const { setData } = useData();
  const navigate = useNavigate();

  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div
        style={{
          border: "1px solid black",
          width: "400px",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Event Registration Form</h2>
        <Formik
          initialValues={{
            fullName: "",
            mobileNumber: "",
            email: "",
            checked: [],
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
            setData(values);
            navigate("/confirmation");
          }}
        >
          {({ errors, touched }) => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  color: "red",
                  alignSelf: "flex-start",
                }}
              >
                *
                {errors.fullName && touched.fullName ? (
                  <span>{errors.fullName}</span>
                ) : null}
              </div>
              <div
                style={{
                  alignSelf: "flex-start",
                }}
              >
                Full Name
              </div>
              <Field name="fullName" />
              <div
                style={{
                  fontSize: "10px",
                  color: "red",
                  alignSelf: "flex-start",
                }}
              >
                *
                {errors.mobileNumber && touched.mobileNumber ? (
                  <span>{errors.mobileNumber}</span>
                ) : null}
              </div>
              <div
                style={{
                  alignSelf: "flex-start",
                }}
              >
                Mobile Number
              </div>
              <Field name="mobileNumber" type="tel" pattern="[0-9]{10}" />
              <div
                style={{
                  fontSize: "10px",
                  color: "red",
                  alignSelf: "flex-start",
                }}
              >
                *
                {errors.email && touched.email ? (
                  <span>{errors.email}</span>
                ) : null}
              </div>
              <div
                style={{
                  alignSelf: "flex-start",
                }}
              >
                Email Id
              </div>
              <Field name="email" type="email" />
              <div
                style={{
                  fontSize: "10px",
                  color: "red",
                  alignSelf: "flex-start",
                }}
              >
                *
                {errors.checked && touched.checked ? (
                  <span>{errors.checked}</span>
                ) : null}
              </div>
              <div id="checkbox-group" style={{ alignSelf: "flex-start" }}>
                Select One or More event
              </div>
              <div
                role="group"
                aria-labelledby="checkbox-group"
                style={{
                  fontWeight: "bold",
                  verticalAlign: "center",
                  alignSelf: "flex-start",
                }}
              >
                <label>
                  <Field type="checkbox" name="checked" value="Event One" />
                  Event One
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="Event Two" />
                  Event Two
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="Event Three" />
                  Event Three
                </label>
              </div>
              <button type="submit" style={{ marginTop: "20px" }}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserForm;
