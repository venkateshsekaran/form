import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";

import Button from "@mui/material/Button";
import React from "react";
import TextField from "@mui/material/TextField";
import studentImage from "./assets/student.jpg";

// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("First Name is required")
    .min(2, "First Name is too short"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(2, "Last Name is too short"),
  age: Yup.number()
    .required("Age is required")
    .min(1, "Age must be at least 1")
    .max(100, "Age must be less than 100"),
});

function App() {
  return (
    <div className="appContainer">
      <div className="formContainer">
        <div className="card">
          <div className="cardLeft">
            <div className="titleContainer">
              <h2>Student Form</h2>
            </div>
            <Formik
              initialValues={{ firstName: "", lastName: "", age: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                // setTimeout(() => {
                //   alert(JSON.stringify(values, null, 2));
                //   setSubmitting(false);
                // }, 400);
                // write function after get all data
              }}
            >
              {({ isSubmitting, handleChange, values, errors, touched }) => (
                <Form className="fieldContainer">
                  {/* First Name */}
                  <div>
                    <TextField
                      name="firstName"
                      label="First Name"
                      variant="outlined"
                      onChange={handleChange}
                      value={values.firstName}
                      error={touched.firstName && !!errors.firstName}
                      helperText={touched.firstName && errors.firstName}
                    />
                  </div>
                  {/* Last Name */}
                  <div>
                    <TextField
                      name="lastName"
                      label="Last Name"
                      variant="outlined"
                      onChange={handleChange}
                      value={values.lastName}
                      error={touched.lastName && !!errors.lastName}
                      helperText={touched.lastName && errors.lastName}
                    />
                  </div>
                  {/* Age */}
                  <div>
                    <TextField
                      name="age"
                      label="Age"
                      variant="outlined"
                      type="number"
                      onChange={handleChange}
                      value={values.age}
                      error={touched.age && !!errors.age}
                      helperText={touched.age && errors.age}
                    />
                  </div>
                  {/* Submit Button */}
                  <div className="titleContainer">
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="cardRight">
            <img src={studentImage} alt="Student" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
