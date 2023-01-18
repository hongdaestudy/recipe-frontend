import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AuthService from './services/auth.service';
import styled from 'styled-components';

import { Layout } from './component/Layout';
export default function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate('/login');
  };
  useEffect(() => {
    if (!AuthService.getCurrentUser()) {
      navigate('/login');
    }
  }, [navigate]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  // router 구성 하고
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
