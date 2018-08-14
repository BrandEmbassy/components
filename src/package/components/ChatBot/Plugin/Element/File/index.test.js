import React from 'react'
import File from './index'

describe('File Component', () => {
  const defaultProps = {
    type: 'FILE',
    url: 'https://www.facebook.com/',
    mimeType: 'application/pdf'
  }
  it('should render basic component', () => {
    expect(shallow(<File {...defaultProps} />)).toMatchSnapshot()
  })
})
