import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/theme/theme-slice';
import './ThemeSwitcher.scss';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
    // localStorage.setItem('theme', newTheme);
  };

  return (
    <div>
      <label className="theme-switch">
        <input type="checkbox" id="theme-toggle" onChange={handleThemeToggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
