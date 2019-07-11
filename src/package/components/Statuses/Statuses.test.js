import React from 'react'
import Statuses from './Statuses'

describe('Statuses', () => {
  const dataProvider = [
    { text: 'custom label', status: 'new' },
    { status: 'new' }
  ]

  dataProvider.forEach(dataSet => {
    it(`should render status with ${JSON.stringify(dataSet)}`, () => {
      const wrapper = shallow(<Statuses {...dataSet} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
