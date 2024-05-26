export default interface ATTextProps {
  children: string | any;
  weight?:
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 'normal'
    | 'bold'
    | 'black';
  type?: 'title' | 'subtitle' | 'body' | 'small';
  color?: string;
  size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'center' | 'left' | 'right' | 'justify' | 'start' | 'end';
}
