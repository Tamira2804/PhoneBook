import React from 'react';
// import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { authOperations } from '../../redux/auth';
import './LoginPage.scss';

const LoginView = () => {
  // const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email format')
        .required('Mandatory field'),
      password: Yup.string().required('Mandatory field'),
    }),
    onSubmit: (values, { resetForm }) => {
      // dispatch(authOperations.logIn(values));
      resetForm();
    },
  });

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={formik.handleSubmit} className="login-form">
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
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginView;
