import { ComponentPropsWithoutRef, forwardRef, useState } from 'react';
import clsx from 'clsx';
import { EyeOff } from 'assets/icons/EyeOff.tsx';
import { Eye } from 'assets/icons/Eye.tsx';
import s from './input.module.scss';

export type TextFieldProps = {
  type?: 'text' | 'password' | 'search' | 'number'
  label?: string
  error?: string | null
  clearValue?: () => void
  className?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, TextFieldProps>(
  ({
    type = 'text', id, label, disabled, error, value, className, ...rest
  }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const classes = {
      input: clsx(
        s.input,
        type === 'password' && s.password,
        error && s.error,
        value && s.active,
      ),
      wrapper: clsx(s.wrapper, disabled && s.disabled, className),
      closeIconButton: clsx(s.btn, s.closeIconButton),
      showPasswordButton: clsx(s.btn, s.showPasswordButton, disabled && s.disabledIcon),
    };

    const togglePassword = () => {
      setShowPassword(!showPassword);
    };

    const finalType = type === 'password' && showPassword ? 'text' : type;

    return (
      <div className={classes.wrapper}>
        {label && (
          <label htmlFor={id} className={s.label}>
            {label}
          </label>
        )}
        <div className={s.inputWrapper}>
          <input
            type={finalType}
            id={id}
            className={classes.input}
            value={value}
            ref={ref}
            disabled={disabled}
            {...rest}
          />
          {type === 'password' && (
            <button
              type="button"
              className={classes.showPasswordButton}
              onClick={togglePassword}
              disabled={disabled}
            >
              {showPassword ? (
                <EyeOff className={s.passwordIcon} />
              ) : (
                <Eye className={s.passwordIcon} />
              )}
            </button>
          )}
          {!!error && (
            <span className={s.errorMessage}>
              {error}
            </span>
          )}
        </div>
      </div>
    );
  },
);
