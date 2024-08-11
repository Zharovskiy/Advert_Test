import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import css from './SearchForm.module.css';

const validationSchema = Yup.object({
  query: Yup.string()
});

const SearchForm = () => {
  
    const onSearch = (query) => {
        console.log('Search query:', query);
    };

  return (
    <Formik
      initialValues={{ query: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        resetForm();
      }}
    >
      {({ values, handleChange }) => (
        <Form className={css.form} noValidate>
          <div className={css.formGroup}>
          <label htmlFor="query" className={css.label}>Location</label>
            <Field
              type="text"
              id="query"
              name="query"
              placeholder="Kyiv, Ukraine"
              className={css.input}
              onChange={(e) => {
                handleChange(e); // Обробка зміни значення форми
                onSearch(e.target.value); // Передача значення до батьківського компонента
              }}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
