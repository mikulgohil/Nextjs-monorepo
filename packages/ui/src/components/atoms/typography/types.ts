export type TypographyVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5' 
  | 'h6'
  | 'body1'
  | 'body2'
  | 'caption';

export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  align?: TypographyAlign;
  as?: keyof JSX.IntrinsicElements;
  truncate?: boolean;
  lines?: 1 | 2 | 3 | 4 | 5 | 6;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
} 