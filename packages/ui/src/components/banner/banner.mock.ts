export const bannerMockData = {
  basic: {
    title: 'Payments tool for software companies',
    description:
      'From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.',
    imageUrl: 'http://unsplash.it/500/500?random&gravity=center',
    primaryAction: {
      label: 'Get started',
      onClick: () => console.log('Primary action clicked'),
    },
    secondaryAction: {
      label: 'Speak to Sales',
      onClick: () => console.log('Secondary action clicked'),
    },
  },
  minimal: {
    title: 'Simple Banner',
    description: 'A minimal banner with essential information',
    imageUrl: 'http://unsplash.it/500/500?random&gravity=center',
  },
  leftImage: {
    title: 'Left-aligned Image Banner',
    description: 'Banner with image positioned on the left side',
    imageUrl: 'http://unsplash.it/500/500?random&gravity=center',
    imagePosition: 'left' as const,
    primaryAction: {
      label: 'Learn More',
      onClick: () => console.log('Learn more clicked'),
    },
  },
}
