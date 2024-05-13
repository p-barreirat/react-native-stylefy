import React from 'react';
import type { ATButtonProps } from './interfaces';
import { Button } from './styles';

export default function ATButton({ children, ...props }: ATButtonProps) {
  return <Button {...props}>{children}</Button>;
}
