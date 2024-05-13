export default interface ATBoxProps {
  children?: any;
  flex?: number;
  background?: string;
  width?: string | number;
  height?: string | number;
  direction?: 'row' | 'column';
  align?: 'center' | 'flex-end' | 'flex-start';
  justify?: 'center' | 'flex-end' | 'flex-start';
}
