import { Outlet } from 'react-router-dom';
import { Header } from '../header/header.tsx';
import { Toast } from '../toast/toast.tsx';

export const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Toast />
  </>
);
