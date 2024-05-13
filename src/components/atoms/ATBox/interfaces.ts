import type { ViewProps } from 'react-native';

export default interface ATBoxProps extends ViewProps {
  children?: any;
  flex?: number;
  background?: string;
  width?: string | number;
  height?: string | number;
  direction?: 'row' | 'column';
  align?: 'center' | 'flex-end' | 'flex-start';
  justify?: 'center' | 'flex-end' | 'flex-start';
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string;
  rounded?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string;
}
