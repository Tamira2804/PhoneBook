import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import ThemeSwitcher from '../ThemeSwitcher';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import authSelectors from '../../redux/auth/auth-selectors';
import { selectTheme } from '../../redux/theme/theme-selectors';
import './Layout.scss';
import '../../styles/_light-theme.scss';
import '../../styles/_dark-theme.scss';

const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const theme = useSelector(selectTheme);

  return (
    <div className={`Container ${theme}-theme`}>
      <header className="Header">
        <Navigation />
        <ThemeSwitcher />
        {isLoggedIn ? <UserMenu /> : <AuthNav theme={theme} />}
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
