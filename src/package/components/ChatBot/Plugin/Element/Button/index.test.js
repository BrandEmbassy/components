import React from 'react'
import Button from './index'

describe('Button', function () {
  it('should render link if URL is provided', () => {
    const wrapper = shallow(<Button label='this is a link' url='http://brandembassy.com' />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render button if onClick and postback is provided', () => {
    const wrapper = shallow(<Button label='this is a button' postback='postback-value' onClick={jest.fn()} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle click on button', () => {
    const clickHandler = jest.fn()
    const wrapper = shallow(<Button label='this is a button' postback='postback-value' onClick={clickHandler} />)
    wrapper.find('button').simulate('click')
    expect(clickHandler).toBeCalledWith('postback-value', 'this is a button')
  })
})
