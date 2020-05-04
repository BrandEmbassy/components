import React from 'react'
import Statuses from './Statuses'

describe('Statuses', () => {
  const dataProvider = [
    { text: 'custom label', status: 'new', hasHover: true },
    { status: 'resolved' }
  ]

  dataProvider.forEach(dataSet => {
    it(`should render status with ${JSON.stringify(dataSet)}`, () => {
      const wrapper = shallow(<Statuses {...dataSet} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
