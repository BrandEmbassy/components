import React from 'react'
import Carusel from './Carusel'

describe('Carusel', () => {
  it('should render carusel', () => {
    const wrapper = render(<Carusel elements={[]} onClick={jest.fn()} hideButtons={false} />)
    expect(wrapper).toMatchSnapshot()
  })
})
