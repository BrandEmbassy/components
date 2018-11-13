import React from 'react'
import Switcher from './Switcher'

describe('Switcher', function () {
  it('should render switcher ON', () => {
    const wrapper = shallow(<Switcher isActive />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render switcher OFF', () => {
    const wrapper = shallow(<Switcher />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should call onClick', () => {
    const clickHandler = jest.fn()
    const wrapper = shallow(<Switcher SwitcherClick={clickHandler} />)
    wrapper.find('[data-jest="click"]').simulate('click')
    expect(clickHandler).toBeCalled()
  })
})
