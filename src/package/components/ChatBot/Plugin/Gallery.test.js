import React from 'react'
import Gallery from './Gallery'

describe('Gallery', () => {
  it('should render gallery', () => {
    const wrapper = render(<Gallery elements={[]} onClick={jest.fn()} hideButtons={false} />)
    expect(wrapper).toMatchSnapshot()
  })
})
