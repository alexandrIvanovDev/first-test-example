import { useNavigate } from 'react-router-dom';
import { Button } from 'components/button/button.tsx';
import { routePaths } from 'app/providers/router/routePaths.ts';
import s from './not-found-page.module.scss';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={s.container}>
      <h2 className={s.header}>This page doesn't exist</h2>
      <Button onClick={() => navigate(routePaths.main)}>Home</Button>
    </div>
  );
};
