import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AuthService from './services/auth.service';
import styled from 'styled-components';

import { Layout } from './component/Layout';
import { useRouter } from './app/hooks/useRouter';
export default function App() {
  const router = useRouter();

  const handleLogout = () => {
    AuthService.logout();
    router.push('/login');
  };
  useEffect(() => {
    if (!AuthService.getCurrentUser()) {
      router.push('/login');
    }
  }, []);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
