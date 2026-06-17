import clsx from 'clsx';
import s from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { icon, isLoading, children, className, ...restProps } = props;

  return (
    <button
      {...restProps}
      className={clsx(s.button, isLoading && s.isLoading, className)}
    >
      {!isLoading && icon}
      {children}
    </button>
  );
};
