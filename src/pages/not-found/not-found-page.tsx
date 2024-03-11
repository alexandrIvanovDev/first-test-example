import { useNavigate } from 'react-router-dom';
import s from './not-found-page.module.scss';
import { Button } from '../../components/button/button.tsx';
import { routePaths } from '../../app/providers/router/routePaths.ts';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className={s.header}>This page doesn't exist</h2>
      <Button onClick={() => navigate(routePaths.main)}>Home</Button>
    </>
  );
};
