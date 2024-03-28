import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Compras from './pages/Compras';
import Estoque from './pages/Estoque';
import Financeiro from './pages/Financeiro';
import Inicio from './pages/Inicio';
import Obras from './pages/Obras';
import Page404 from './pages/Page404';
import CustomRoute from './components/CustomRoute';
import Login from './pages/Login';
import UserCons from './components/Pages/User/Cons';
import LegalEntityCons from './components/Pages/LegalEntity/Cons';

export default function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSidebarExpansion = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const handleLoggedIn = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <CustomRoute
                handleLoggedIn={handleLoggedIn}
                sidebarExpanded={sidebarExpanded}
                handleSidebarExpansion={handleSidebarExpansion}
                isLoggedIn={isLoggedIn}
              />
            }
          >
            <Route path="/compras" element={<Compras />} />
            <Route path="/users" element={<UserCons />} />
            <Route path="/legalEntities" element={<LegalEntityCons />} />
            <Route path="/estoque" element={<Estoque />} />
            <Route path="/financeiro" element={<Financeiro />} />
            <Route path="/obras" element={<Obras />} />
            <Route path="/inicio" element={<Inicio />} />
          </Route>
          <Route path="/login" element={<Login handleLoggedIn={handleLoggedIn} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </div>
  );
}
