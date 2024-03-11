import { useState } from 'react';
import { LoginFormType } from 'components/login-form/use-login.ts';
import { LoginForm } from 'components/login-form/login-form.tsx';
import s from './login-page.module.scss';

export const LoginPage = () => {
  const [userData, setUserData] = useState<LoginFormType | null>(null);

  const submitForm = (data: LoginFormType) => {
    setUserData(data);
  };

  return (
    <div className={s.container}>
      <h2>Login page</h2>
      <LoginForm submitForm={submitForm} />
      {userData
        && (
          <>
            <h3>User data</h3>
            <div>Email: {userData.email}</div>
            <div>Password: {userData.password}</div>
          </>
        )}
    </div>
  );
};
