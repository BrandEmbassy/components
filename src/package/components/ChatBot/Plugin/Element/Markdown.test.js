import React from 'react'
import Markdown from './Markdown'

describe('Markdown', () => {
  it('renders component with formatted text', () => {
    const wrapper = mount(<Markdown text='**Lorem** ipsum' />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders links with target="blank"', () => {
    const wrapper = mount(
      <Markdown text='**Lorem** ipsum [BE](https://brandembassy.com)' />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
