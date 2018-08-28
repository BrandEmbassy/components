/* eslint-disable import/first */
jest.mock('./Element/File/videoPlayerStylesLoader')
import React from 'react'
import Gallery from './Gallery'
import elements from './__fixtures__/index.json'

describe('Gallery', () => {
  it('should render gallery', () => {
    const wrapper = render(<Gallery elements={elements} onClick={jest.fn()} hideButtons={false} />)
    expect(wrapper).toMatchSnapshot()
  })
})
