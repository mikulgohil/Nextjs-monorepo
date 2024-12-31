export const heroHeadingMockData = {
  basic: {
    title: 'Welcome to Mock Testing',
    subtitle: 'This is a mock subtitle for testing',
    ctaText: 'Get Started',
    onCtaClick: () => console.log('CTA clicked'),
    className: '',
  },
  withCustomStyles: {
    title: 'Custom Styled Heading',
    subtitle: 'Custom Styled Subtitle',
    ctaText: 'Learn More',
    onCtaClick: () => console.log('Custom CTA clicked'),
    className: 'bg-gray-100 p-8',
  },
  withChildren: {
    title: 'Heading with Children',
    subtitle: 'Testing with child components',
    ctaText: 'Primary Action',
    onCtaClick: () => console.log('Primary CTA clicked'),
    className: '',
    children: '<span>Secondary Action</span>',
  },
}
