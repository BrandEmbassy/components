import {isPluginVideo} from './index'

describe('Video', () => {
  describe('isPluginVideo', () => {
    const dataSet = [
      {
        id: 1,
        expectedResult: true,
        elements: [{
          id: 'image-046e409f-85b6-4911-a1e7-4802d2046e59',
          type: 'FILE',
          text: '',
          postback: '',
          url: 'https://www.w3schools.com/tags/movie.mp4',
          elements: [],
          filename: 'movie.mp4',
          mimeType: 'video/mp4'
        }]
      },
      {
        id: 2,
        expectedResult: false,
        elements: [{
          id: 'image-046e409f-85b6-4911-a1e7-4802d2046e59',
          'type': 'FILE',
          'text': '',
          'postback': '',
          'url': 'https: //chatbot-workflow-plugins-dev.s3.eu-west-2.amazonaws.com/PluginGallery/LkuDF4L1xho2XIYJ39IYkA2cdnup4bRjNOV0S1ym.jpeg',
          'elements': [],
          'filename': 'LkuDF4L1xho2XIYJ39IYkA2cdnup4bRjNOV0S1ym.jpeg',
          'mimeType': 'application/pdf'
        }]
      },
      {
        id: 3,
        expectedResult: false,
        elements: [{
          'id': 'multimedia-cf995831-c25f-405f-a6ff-fc79a8559d5e',
          'type': 'FILE',
          'text': '',
          'postback': '',
          'url': 'https: //chatbot-workflow-plugins-dev.s3.eu-west-2.amazonaws.com/PluginSendMultimedia/77/images.jpeg',
          'elements': [],
          'filename': 'images.jpeg',
          'mimeType': 'image/jpeg'
        }]
      }
    ]
    dataSet.forEach((test) => {
      it(`[${test.id}] should return ${test.expectedResult}`, () => {
        expect(isPluginVideo(test.elements)).toEqual(test.expectedResult)
      })
    })
  })
})
