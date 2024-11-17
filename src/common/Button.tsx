import { ButtonHTMLAttributes } from 'react';
import { buttonStyles } from '../styles/buttonStyles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({ children, style, ...props }: ButtonProps) => (
  <button
    style={{ ...buttonStyles.base, ...style }}
    {...props}
  >
    {children}
  </button>
);