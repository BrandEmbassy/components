/* eslint-disable import/first */
jest.mock('./Element/File/videoPlayerStylesLoader')
import React from 'react'
import Plugin from './index'
import elements from './__fixtures__/index.json'

describe('Plugin index', () => {
  it('should render carusel inside plugin', () => {
    const wrapper = mount(<Plugin elements={elements} onClick={jest.fn()} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render gallery inside plugin', () => {
    const wrapper = mount(<Plugin elements={elements} onClick={jest.fn()} disableCarusel />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render raw element inside plugin', () => {
    const wrapper = mount(<Plugin elements={[elements[0]]} onClick={jest.fn()} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render standalone plugin', () => {
    const quickReplies = elements[0]
    quickReplies.type = 'QUICK_REPLIES'
    const wrapper = mount(<Plugin elements={[quickReplies]} onClick={jest.fn()} />)
    expect(wrapper).toMatchSnapshot()
  })
})
