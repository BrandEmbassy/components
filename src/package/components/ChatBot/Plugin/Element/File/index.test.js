/* eslint-disable import/first */
jest.mock('./videoPlayerStylesLoader')
import React from 'react'
import File from './index'

describe('File Component', () => {
  const dataSet = [
    { id: 1, type: 'FILE', url: 'https://www.facebook.com/', mimeType: 'application/pdf' },
    { id: 2, type: 'FILE', url: 'http://via.placeholder.com/350x150', mimeType: 'image/jpeg' },
    { id: 3, type: 'FILE', url: 'https://www.w3schools.com/tags/movie.mp4', mimeType: 'video/mp4' }
  ]

  dataSet.forEach((test) => {
    it(`[${test.id}] should render basic component`, () => {
      expect(shallow(<File {...test} />)).toMatchSnapshot()
    })
  })
})
