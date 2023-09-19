import React from 'react';
// import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { authOperations } from '../../redux/auth';
import './RegisterPage.scss';

const RegisterPage = () => {
  // const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Обов'язкове поле"),
      email: Yup.string()
        .email('Невірний формат електронної пошти')
        .required("Обов'язкове поле"),
      password: Yup.string().required("Обов'язкове поле"),
    }),
    onSubmit: (values, { resetForm }) => {
      // dispatch(authOperations.register(values));
      resetForm();
    },
  });

  return (
    <div>
      <h1>Registration Page</h1>

      <form onSubmit={formik.handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="input"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="input"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="input"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" className="button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
