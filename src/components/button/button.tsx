import { ButtonHTMLAttributes } from 'react';
import s from './button.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: Props) => {
  const { children, type = 'button', ...rest } = props;

  return (
    <button type={type} className={s.button} {...rest}>
      {children}
    </button>
  );
};
