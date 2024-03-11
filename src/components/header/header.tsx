import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { routePaths } from 'app/providers/router/routePaths.ts';
import s from './header.module.scss';

type RouteItem = {
  link: string
  text: string
}

const routeItemsList: Array<RouteItem> = [
  { link: routePaths.main, text: 'Main' },
  { link: routePaths.login, text: 'Login' },
];

export const Header = () => (
  <header className={s.header}>
    <div className={s.container}>
      <div className={s.links}>
        {routeItemsList.map((el) => (
          <NavLink
            to={el.link}
            key={el.link}
            className={({ isActive }) => clsx(s.link, { [s.active]: isActive })}
          >
            <div>{el.text}</div>
          </NavLink>
        ))}
      </div>
    </div>
  </header>
);
