export default interface ATTextProps {
  children: string;
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
}
