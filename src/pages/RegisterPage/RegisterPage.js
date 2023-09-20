import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import './RegisterPage.scss';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Registration Page</h1>

      <form onSubmit={handleSubmit} className="RegisterForm__container">
        <div className="RegisterForm_group">
          <label htmlFor="name" className="RegisterForm__label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className="RegisterForm__input"
          />
        </div>

        <div className="RegisterForm_group">
          <label htmlFor="email" className="RegisterForm__label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="RegisterForm__input"
          />
        </div>

        <div className="RegisterForm_group">
          <label htmlFor="password" className="RegisterForm__label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="RegisterForm__input"
          />
        </div>

        <button type="submit" className="Register__btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;

// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { authOperations } from '../../redux/auth';
// import './RegisterPage.scss';

// const RegisterPage = () => {
//   const dispatch = useDispatch();

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       password: '',
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required("Обов'язкове поле"),
//       email: Yup.string()
//         .email('Невірний формат електронної пошти')
//         .required("Обов'язкове поле"),
//       password: Yup.string().required("Обов'язкове поле"),
//     }),
//     onSubmit: (values, { resetForm }) => {
//       dispatch(authOperations.register(values));
//       resetForm();
//     },
//   });

//   return (
//     <div>
//       <h1>Registration Page</h1>

//       <form onSubmit={formik.handleSubmit} className="register-form">
//         <div className="form-group">
//           <label htmlFor="name" className="label">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="input"
//             {...formik.getFieldProps('name')}
//           />
//           {formik.touched.name && formik.errors.name ? (
//             <div className="error">{formik.errors.name}</div>
//           ) : null}
//         </div>

//         <div className="form-group">
//           <label htmlFor="email" className="label">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="input"
//             {...formik.getFieldProps('email')}
//           />
//           {formik.touched.email && formik.errors.email ? (
//             <div className="error">{formik.errors.email}</div>
//           ) : null}
//         </div>

//         <div className="form-group">
//           <label htmlFor="password" className="label">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="input"
//             {...formik.getFieldProps('password')}
//           />
//           {formik.touched.password && formik.errors.password ? (
//             <div className="error">{formik.errors.password}</div>
//           ) : null}
//         </div>

//         <button type="submit" className="button">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;
