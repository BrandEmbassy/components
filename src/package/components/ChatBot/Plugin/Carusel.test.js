jest.mock('./Element/File/videoPlayerStylesLoader')
import React from 'react'
import Carusel from './Carusel'
import elements from './__fixtures__/index.json'

describe('Carusel', () => {
  it('should render carusel', () => {
    const wrapper = render(<Carusel elements={elements} onClick={jest.fn()} hideButtons={false} />)
    expect(wrapper).toMatchSnapshot()
  })
})
