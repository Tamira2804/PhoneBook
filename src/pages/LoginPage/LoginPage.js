import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import './LoginPage.scss';

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit} className="LoginForm__container">
        <div className="LoginForm_group">
          <label htmlFor="email" className="LoginForm__label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="LoginForm__input"
          />
        </div>

        <div className="LoginForm_group">
          <label htmlFor="password" className="LoginForm__label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="LoginForm__input"
          />
        </div>

        <button type="submit" className="Login__btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginView;
