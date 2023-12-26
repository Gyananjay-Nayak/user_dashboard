import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

function Layout() {
  //   const Outlet = useOutlet();
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
