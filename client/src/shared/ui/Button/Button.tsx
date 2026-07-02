import clsx from 'clsx';
import { forwardRef, type ComponentProps } from 'react';
import { Slot } from '@radix-ui/react-slot';
import s from './Button.module.css';

interface ButtonProps extends ComponentProps<'button'> {
  icon?: SVGComponent;
  isLoading?: boolean;
  asChild?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      icon: Icon,
      isLoading,
      children,
      className,
      asChild = false,
      variant = 'secondary',
      ...restProps
    } = props;

    const shouldIcon = !isLoading && Icon;

    const Component = asChild ? Slot : 'button';

    return (
      <Component
        {...restProps}
        ref={ref}
        className={clsx(
          s.button,
          isLoading && s.isLoading,
          children && s.textButton,
          s[variant],
          className
        )}
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
