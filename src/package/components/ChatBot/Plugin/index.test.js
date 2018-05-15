import React from 'react'
import Plugin from './index'
import elements from './__fixtures__/index.json'

describe('Plugin index', () => {
  it('should render carusel inside plugin', () => {
    const wrapper = render(<Plugin elements={elements} onClick={jest.fn()} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render gallery inside plugin', () => {
    const wrapper = render(<Plugin elements={elements} onClick={jest.fn()} disableCarusel />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render raw element inside plugin', () => {
    const wrapper = render(<Plugin elements={[elements[0]]} onClick={jest.fn()} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render standalone plugin', () => {
    const quickReplies = elements[0]
    quickReplies.type = 'QUICK_REPLIES'
    const wrapper = render(<Plugin elements={[quickReplies]} onClick={jest.fn()} />)
    expect(wrapper).toMatchSnapshot()
  })
})
