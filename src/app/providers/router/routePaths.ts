export type Routes = 'login' | 'main' | 'notFound';

export const routePaths: Record<Routes, string> = {
  main: '/',
  login: '/login',
  notFound: '/*',
};
