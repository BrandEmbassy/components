import React from 'react'
import Heading from './index'

describe('Heading', () => {
  const levels = [1, 2, 3]

  levels.forEach((level) => {
    it(`should return heading with correct level ${level}`, () => {
      const wrapper = shallow(<Heading level={level} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
