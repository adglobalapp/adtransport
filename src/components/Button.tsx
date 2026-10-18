import type { AnchorHTMLAttributes, ReactNode } from 'react';
import './Button.css';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'outline';
  children: ReactNode;
};

export function Button({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  return (
    <a className={`btn btn--${variant} ${className}`.trim()} {...rest}>
      {children}
    </a>
  );
}
