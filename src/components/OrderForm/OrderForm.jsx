import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./OrderForm.module.css";

const OrderForm = () => {
  const initialValues = {
    name: "",
    email: "",
    date: "",
    comments: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    date: Yup.string().required("Date is required"),
    comments: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    alert("Form is send");
    resetForm();
    window.location.reload();
  };

  return (
    <div className={css.box}>
      <div>
        <h4 className={css.title}>Book your campervan now</h4>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.formGroup}>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className={css.input}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          <div className={css.formGroup}>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={css.input}
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          <div className={css.formGroup}>
            <Field
              type="date"
              id="date"
              name="date"
              placeholder="Select a date"
              className={css.input}
            />
            <ErrorMessage name="date" component="div" className={css.error} />
          </div>

          <div className={css.formGroupComment}>
            <Field
              as="textarea"
              id="comments"
              name="comments"
              placeholder="Comments"
              className={css.textarea}
            />
          </div>

          <button type="submit" className={css.submitButton}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default OrderForm;
