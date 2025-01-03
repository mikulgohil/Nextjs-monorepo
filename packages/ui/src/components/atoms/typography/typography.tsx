import React from 'react';
import { cn } from '../../../utils/class-names';
import { TypographyProps } from './types';

const VARIANT_STYLES = {
  h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
  h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
  h6: 'scroll-m-20 text-base font-semibold tracking-tight',
  body1: 'leading-7',
  body2: 'text-sm leading-6',
  caption: 'text-xs leading-5',
} as const;

const ALIGNMENT_STYLES = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
} as const;

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = 'body1',
      align = 'left',
      children,
      className,
      as,
      truncate = false,
      lines,
      dangerouslySetInnerHTML,
      ...props
    },
    ref
  ) => {
    const Component = as || getDefaultComponent(variant);
    
    const classes = cn(
      'text-foreground',
      VARIANT_STYLES[variant],
      ALIGNMENT_STYLES[align],
      truncate && 'overflow-hidden',
      truncate && !lines && 'truncate',
      truncate && lines && `line-clamp-${lines}`,
      className
    );

    if (dangerouslySetInnerHTML) {
      return (
        <Component
          ref={ref}
          className={classes}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
          {...props}
        />
      );
    }

    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

function getDefaultComponent(variant: string): keyof JSX.IntrinsicElements {
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return variant;
    default:
      return 'p';
  }
} 