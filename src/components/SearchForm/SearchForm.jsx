import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import useQueryParams from "../../hooks/useQueryParams";

import css from "./SearchForm.module.css";

const validationSchema = Yup.object({
  location: Yup.string(),
  airConditioner: Yup.boolean(),
  transmission: Yup.boolean(),
  kitchen: Yup.boolean(),
  TV: Yup.boolean(),
  shower: Yup.boolean(),
  toilet: Yup.boolean(),
  formCamper: Yup.string(),
});

const SearchForm = () => {
  const { getParam, setAllParams } = useQueryParams();

  const getInitialValuesFromParams = () => {
    return {
      location: getParam("location") || "",
      airConditioner: getParam("airConditioner") === "true" || false,
      transmission: getParam("transmission") === "true" || false,
      kitchen: getParam("kitchen") === "true" || false,
      TV: getParam("TV") === "true" || false,
      shower: getParam("shower") === "true" || false,
      toilet: getParam("toilet") === "true" || false,
      formCamper: getParam("formCamper") || "",
    };
  };

  const onSearch = (values) => {
    setAllParams(values);
  };

  return (
    <Formik
      initialValues={getInitialValuesFromParams()}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSearch(values);
      }}
    >
      {() => (
        <Form className={css.form} noValidate>
          <div className={css.formGroup}>
            <label htmlFor="location" className={css.label}>
              Location
            </label>
            <Field
              type="text"
              id="location"
              name="location"
              placeholder="Ukraine, Kyiv"
              className={css.input}
            />
          </div>

          <div className={css.checkboxGroup}>
            <label>
              <Field type="checkbox" name="airConditioner" />
              Air Conditioner
            </label>
            <label>
              <Field type="checkbox" name="transmission" />
              Transmission
            </label>
            <label>
              <Field type="checkbox" name="kitchen" />
              Kitchen
            </label>
            <label>
              <Field type="checkbox" name="TV" />
              TV
            </label>
            <label>
              <Field type="checkbox" name="shower" />
              Shower
            </label>
            <label>
              <Field type="checkbox" name="toilet" />
              Toilet
            </label>
          </div>

          <div className={css.radioGroup}>
            <label>
              <Field type="radio" name="formCamper" value="alcove" />
              Alcove
            </label>
            <label>
              <Field type="radio" name="formCamper" value="fullyIntegrated" />
              Fully Integrated
            </label>
            <label>
              <Field type="radio" name="formCamper" value="panelTruck" />
              Panel Truck
            </label>
          </div>

          <button type="submit" className={css.submitButton}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
