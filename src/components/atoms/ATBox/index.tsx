import React from 'react';
import type ATBoxProps from './interfaces';
import { Box } from './styles';

export default function ATBom({ children, ...props }: ATBoxProps) {
  return <Box {...props}>{children}</Box>;
}
