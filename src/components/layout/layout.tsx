import { Outlet } from 'react-router-dom';
import { Header } from 'components/header/header.tsx';
import { Toast } from 'components/toast/toast.tsx';

export const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Toast />
  </>
);
