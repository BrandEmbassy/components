/* eslint-disable import/first */
jest.mock('./Element/File/videoPlayerStylesLoader')
import React from 'react'
import Plugin from './Plugin'

describe('Plugin', () => {
  it('should render plugin', () => {
    const wrapper = render(<Plugin elements={[]} onClick={jest.fn()} hideButtons={false} />)
    expect(wrapper).toMatchSnapshot()
  })
})
