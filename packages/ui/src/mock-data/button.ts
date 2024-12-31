export const buttonMockData = {
  basic: {
    children: 'Click Me',
    onClick: () => console.log('Button clicked'),
    size: 'md' as const
  },
  large: {
    children: 'Large Button',
    onClick: () => console.log('Large button clicked'),
    size: 'lg' as const,
    className: 'rounded-full px-8 font-sans'
  },
  custom: {
    children: 'Custom Button',
    onClick: () => console.log('Custom button clicked'),
    size: 'sm' as const,
    className: 'bg-primary text-white'
  }
}
