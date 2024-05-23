import React from 'react';
import type ATSafeProps from './interfaces';
import { Safe } from './styles';

export default function ATSafe({ children, ...props }: ATSafeProps) {
  return <Safe {...props}>{children}</Safe>;
}
