// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import './Layout.scss';

const Layout = () => {
  return (
    <div className="Container">
      <header className="Header">
        <Navigation />
        <AuthNav />
      </header>
      <main>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
    </div>
  );
};

export default Layout;
