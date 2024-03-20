import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Main from '../Main';
import PropTypes from 'prop-types';

export default function CustomRoute({
  sidebarExpanded,
  handleSidebarExpansion,
  isLoggedIn,
  handleLoggedIn,
}) {
  return isLoggedIn ? (
    <>
      <Header
        sidebarExpanded={sidebarExpanded}
        handleSidebarExpansion={handleSidebarExpansion}
        handleLoggedIn={handleLoggedIn}
      />
      <div className="middleConteinerApp">
        <Sidebar sidebarExpanded={sidebarExpanded} />
        <Main>
          <Outlet />
        </Main>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
}

CustomRoute.propTypes = {
  handleSidebarExpansion: PropTypes.func.isRequired,
  sidebarExpanded: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  handleLoggedIn: PropTypes.func.isRequired,
};
