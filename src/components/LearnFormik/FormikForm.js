import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup"

const FormikForm = () => {
  //each field has 3 things
  //value , error , touch
  let initialValues = {
    firstName: "",
    lastName: "",
    description: "",
  };
  let onSubmit = (value, other) => {
    console.log(value);
  };
//validation will run only if 
//onChange event is fire
//onBlur(touched) event is fire
//onSubmit event is fire

//


  let validationSchema = yup.object({
    firstName: yup.string().required("First Name Field is Required"),
    lastName: yup.string().required("Last Name Field is Required"),
    description: yup.string().required("Description Field is Required"),
  });
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}
      validationSchema={validationSchema}>
        {(formik) => {
          return (
            <Form>
              <Field name="firstName">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="firstName">First Name:</label>
                      <input
                      {...field}
                        type="text"
                        id="firstName"
                        value={meta.value}
                        onChange={(e) => {
                          formik.setFieldValue("firstName", e.target.value);
                        }}
                      />
                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
              <br />

              <Field name="lastName">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="lastName">Last Name:</label>
                      <input
                        {...field}
                        type="text"
                        id="lastName"
                        value={meta.value}
                        // onChange={(e) => {
                        //   formik.setFieldValue("lastName", e.target.value);
                        // }}
                        onChange={field.onChange}
                      />
                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
              <br />

              <Field name="description">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="lastName">Description:</label>
                      <input
                        {...field}
                        id="lastName"
                        value={meta.value}
                        // onChange={(e) => {
                        //   formik.setFieldValue("description", e.target.value);
                        // }}
                        onChange={field.onChange}
                      />
                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
              <br />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormikForm;


/*
meta={
  value:"",
  error:"First Name is Required",
  touched:false
}
 */
