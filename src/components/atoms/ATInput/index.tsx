import React from 'react';
import type { ATInputProps } from './interfaces';
import { Input } from './styles';

export default function ATInput({ ...props }: ATInputProps) {
  return <Input {...props} />;
}
