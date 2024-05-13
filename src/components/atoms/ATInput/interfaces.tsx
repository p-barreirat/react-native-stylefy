import type { TextInputProps } from 'react-native';

export interface ATInputProps extends TextInputProps {
  width?: string | number;
  height?: string | number;
  background?: string;
  rounded?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  padding?: string | number;
  flex?: string | number;
}
