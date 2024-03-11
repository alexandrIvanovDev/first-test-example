import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { LoginPage } from '../../../pages/login/login-page.tsx';
import { NotFoundPage } from '../../../pages/not-found/not-found-page.tsx';
import { Layout } from '../../../components/layout/layout.tsx';
import { MainPage } from '../../../pages/main/main-page.tsx';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/*',
    element: <NotFoundPage />,
  },
];

const index = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
    errorElement: <div>Error Boundary</div>,
  },
]);

export const Router = () => <RouterProvider router={index} />;
