import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function that combines clsx and tailwind-merge for handling class names
 * @param inputs - Class values to be merged
 * @returns Merged and optimized class string
 */
export function cn(...args: any[]) {
  return twMerge(classNames(args));
} 