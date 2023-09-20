import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import authSelectors from '../../redux/auth/auth-selectors';
import './Layout.scss';

const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <div className="Container">
      <header className="Header">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
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
