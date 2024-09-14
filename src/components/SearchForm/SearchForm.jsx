import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import useQueryParams from "../../hooks/useQueryParams";
import sprite from "../../assets/icons/sprite.svg";
import ac from "../../assets/ac.svg";

import css from "./SearchForm.module.css";

const validationSchema = Yup.object({
  location: Yup.string(),
  airConditioner: Yup.boolean(),
  transmission: Yup.boolean(),
  kitchen: Yup.boolean(),
  TV: Yup.boolean(),
  shower: Yup.boolean(),
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
      formCamper: getParam("formCamper") || "",
    };
  };

  const resetValues = {
    location: "",
    airConditioner: false,
    transmission: false,
    kitchen: false,
    TV: false,
    shower: false,
    formCamper: "",
  };

  const onSearch = (values) => {
    setAllParams(values);
  };

  const onReset = (resetForm) => {
    setAllParams(resetValues);
    resetForm({ values: resetValues });
  };

  return (
    <Formik
      initialValues={getInitialValuesFromParams()}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSearch(values);
      }}
    >
      {({ resetForm }) => (
        <Form className={css.form} noValidate>
          <div className={css.locationGroup}>
            <label className={css.locationLabel} htmlFor="location">
              Location
            </label>
            <div className={css.locationField}>
              <Field
                type="text"
                id="location"
                name="location"
                placeholder="Ukraine, Kyiv"
                className={css.locationInput}
              />
              <svg className={css.iconLocation} width="18" height="20">
                <use href={`${sprite}#icon-location`}></use>
              </svg>
            </div>
          </div>

          <div className={css.filtersGroup}>
            <p className={css.filtersTitle}>Filters</p>
            <div className={css.filtersBoxes}>
              <div className={css.checkboxBox}>
                <p className={css.checkboxTitle}>Vehicle equipment</p>
                <div className={css.line}></div>
                <div className={css.checkboxList}>
                  <div className={css.checkboxItem}>
                    <Field
                      className={css.checkboxVisuallyHidden}
                      type="checkbox"
                      name="airConditioner"
                      id="airConditioner"
                    />
                    <label className={css.labelBox} htmlFor="airConditioner">
                      <img src={ac} width="30" height="25" />
                      <span className={css.checkBoxText}>AC</span>
                    </label>
                  </div>

                  <div className={css.checkboxItem}>
                    <Field
                      className={css.checkboxVisuallyHidden}
                      type="checkbox"
                      name="transmission"
                      id="transmission"
                    />
                    <label className={css.labelBox} htmlFor="transmission">
                      <svg className={css.icon} width="30" height="25">
                        <use href={`${sprite}#icon-transmission`}></use>
                      </svg>
                      <span className={css.checkBoxText}>Automatic</span>
                    </label>
                  </div>

                  <div className={css.checkboxItem}>
                    <Field
                      className={css.checkboxVisuallyHidden}
                      type="checkbox"
                      name="kitchen"
                      id="kitchen"
                    />
                    <label className={css.labelBox} htmlFor="kitchen">
                      <svg className={css.icon} width="30" height="25">
                        <use href={`${sprite}#icon-kitchen`}></use>
                      </svg>
                      <span className={css.checkBoxText}>Kitchen</span>
                    </label>
                  </div>

                  <div className={css.checkboxItem}>
                    <Field
                      className={css.checkboxVisuallyHidden}
                      type="checkbox"
                      name="TV"
                      id="TV"
                    />
                    <label className={css.labelBox} htmlFor="TV">
                      <svg className={css.icon} width="30" height="25">
                        <use href={`${sprite}#icon-tv`}></use>
                      </svg>
                      <span className={css.checkBoxText}>TV</span>
                    </label>
                  </div>

                  <div className={css.checkboxItem}>
                    <Field
                      className={css.checkboxVisuallyHidden}
                      type="checkbox"
                      name="shower"
                      id="shower"
                    />
                    <label className={css.labelBox} htmlFor="shower">
                      <svg className={css.icon} width="30" height="25">
                        <use href={`${sprite}#icon-shower`}></use>
                      </svg>
                      <span className={css.checkBoxText}>Shower/WC</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className={css.radioBox}>
                <p className={css.checkboxTitle}>Vehicle type</p>
                <div className={css.line}></div>
                <div className={css.radioList}>
                  <div className={css.radioItem}>
                    <Field
                      className={css.checkboxVisuallyHidden}
                      type="radio"
                      name="formCamper"
                      value="panelTruck"
                      id="panelTruck"
                    />
                    <label className={css.labelBox} htmlFor="panelTruck">
                      <svg className={css.iconForm} width="40" height="29">
                        <use href={`${sprite}#icon-camper3`}></use>
                      </svg>
                      <span className={css.checkBoxText}>Van</span>
                    </label>
                  </div>

                  <div className={css.radioItem}>
                    <Field
                      className={css.checkboxVisuallyHidden}
                      type="radio"
                      name="formCamper"
                      value="fullyIntegrated"
                      id="fullyIntegrated"
                    />
                    <label className={css.labelBox} htmlFor="fullyIntegrated">
                      <svg className={css.iconForm} width="40" height="29">
                        <use href={`${sprite}#icon-camper2`}></use>
                      </svg>
                      <span className={css.checkBoxText}>Fully Integrated</span>
                    </label>
                  </div>

                  <div className={css.radioItem}>
                    <Field
                      className={css.checkboxVisuallyHidden}
                      type="radio"
                      name="formCamper"
                      value="alcove"
                      id="alcove"
                    />
                    <label className={css.labelBox} htmlFor="alcove">
                      <svg className={css.iconForm} width="40" height="29">
                        <use href={`${sprite}#icon-camper`}></use>
                      </svg>
                      <span className={css.checkBoxText}>Alcove</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={css.btnBox}>
            <button type="submit" className={css.submitButton}>
              Search
            </button>
            <button
              type="button"
              className={css.submitButton}
              onClick={() => onReset(resetForm)}
            >
              Reset
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
