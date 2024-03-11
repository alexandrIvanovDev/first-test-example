import { Input } from 'components/input/input.tsx';
import { Button } from '../button/button.tsx';
import s from './login-form.module.scss';
import { LoginFormType, useLogin } from './use-login.ts';

type Props = {
  submitForm: (data: LoginFormType) => void
}

export const LoginForm = ({ submitForm }: Props) => {
  const { register, handleSubmit, errors } = useLogin();

  return (
    <form className={s.form} onSubmit={handleSubmit(submitForm)}>
      <Input {...register('email')} error={errors.email?.message} label="Email" />
      <Input type="password" {...register('password')} error={errors.password?.message} label="Password" />
      <Button type="submit">Login</Button>
    </form>
  );
};
