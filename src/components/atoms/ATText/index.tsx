import React from 'react';
import type ATTextProps from './interfaces';
import { Text } from './styles';

export default function ATText({ children, ...props }: ATTextProps) {
  return <Text {...props}>{children}</Text>;
}
