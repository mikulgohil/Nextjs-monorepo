import { TypographyVariant } from './types';

export const typographyVariants: Record<TypographyVariant, string> = {
  h1: 'text-4xl font-bold leading-tight md:text-5xl',
  h2: 'text-3xl font-bold leading-tight md:text-4xl',
  h3: 'text-2xl font-bold leading-tight md:text-3xl',
  h4: 'text-xl font-bold leading-tight md:text-2xl',
  h5: 'text-lg font-bold leading-tight md:text-xl',
  h6: 'text-base font-bold leading-tight md:text-lg',
  subtitle1: 'text-xl leading-relaxed',
  subtitle2: 'text-lg leading-relaxed',
  body1: 'text-base leading-relaxed',
  body2: 'text-sm leading-relaxed',
  caption: 'text-sm leading-normal',
  overline: 'text-xs uppercase tracking-wider'
};

export const alignmentClasses: Record<string, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify'
}; 