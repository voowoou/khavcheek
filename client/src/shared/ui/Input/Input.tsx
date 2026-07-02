import clsx from 'clsx';
import type { ComponentProps } from 'react';
import s from './Input.module.css';

interface InputProps extends ComponentProps<'input'> {
  error?: string;
}

export const Input = (props: InputProps) => {
  const { error, className, ...restProps } = props;

  return (
    <div className={s.container}>
      <input className={clsx(s.input, className)} {...restProps} />
      {error && <span className={s.error}>{error}</span>}
    </div>
  );
};
