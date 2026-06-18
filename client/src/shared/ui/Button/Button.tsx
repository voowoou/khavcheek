import clsx from 'clsx';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import s from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: SVGComponent;
  isLoading?: boolean;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      icon: Icon,
      isLoading,
      children,
      className,
      asChild = false,
      ...restProps
    } = props;

    const shouldIcon = !isLoading && Icon;

    const Component = asChild ? Slot : 'button';

    return (
      <Component
        {...restProps}
        ref={ref}
        className={clsx(s.button, isLoading && s.isLoading, className)}
      >
        <>
          {shouldIcon && <Icon className={s.icon} />}
          {children}
        </>
      </Component>
    );
  }
);

//dev
Button.displayName = 'Button';
