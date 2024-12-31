import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Banner } from '../banner'
import { bannerMockData } from '../banner.mock'

describe('Banner', () => {
  it('renders all elements when all props are provided', () => {
    const mockPrimaryClick = jest.fn()
    const mockSecondaryClick = jest.fn()

    const props = {
      ...bannerMockData.basic,
      primaryAction: {
        ...bannerMockData.basic.primaryAction!,
        onClick: mockPrimaryClick,
      },
      secondaryAction: {
        ...bannerMockData.basic.secondaryAction!,
        onClick: mockSecondaryClick,
      },
    }

    render(<Banner {...props} />)

    expect(screen.getByText(props.title!)).toBeInTheDocument()
    expect(screen.getByText(props.description!)).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      expect.stringContaining('payment-stack')
    )

    const primaryButton = screen.getByText(props.primaryAction.label)
    const secondaryButton = screen.getByText(props.secondaryAction.label)

    fireEvent.click(primaryButton)
    fireEvent.click(secondaryButton)

    expect(mockPrimaryClick).toHaveBeenCalled()
    expect(mockSecondaryClick).toHaveBeenCalled()
  })

  it('renders without optional elements', () => {
    render(<Banner title="Just a title" />)

    expect(screen.getByText('Just a title')).toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
