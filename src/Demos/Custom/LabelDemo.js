import React, { Component } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line
import Label from './../../package/components/Label/Label'
import ProfilePicture from './../../package/components/ProfilePicture/ProfilePicture'
import Channel from './../../package/components/Channel/Channel'
import StorybookHighlighter from './../../utils/StorybookHighlighter'

const importComponent = `import { Label } from 'components';`

export default class LabelDemo extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row padding-20'>
          <div className='col-xs-12' >
            <h2 className='h2'>Label</h2>
            <h3 className='h3'>{importComponent}</h3>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12' >
            <Label text='facebook channel label text here'>
              <Channel Facebook Size40 />
            </Label>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <StorybookHighlighter >
              <Label text='facebook channel label text here'>
                <Channel Facebook Size40 />
              </Label>
            </StorybookHighlighter >
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12' >
            <Label text='dogo label text here'>
              <ProfilePicture Size40 />
            </Label>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <StorybookHighlighter >
              <Label text='Profile label text here'>
                <ProfilePicture Size40 />
              </Label>
            </StorybookHighlighter >
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12' >
            <Label text='dogo label text here'>
              <ProfilePicture Size20 />
            </Label>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <StorybookHighlighter >
              <Label text='Profile label text here'>
                <ProfilePicture Size20 />
              </Label>
            </StorybookHighlighter >
          </div>
        </div>
      </div>
    )
  }
}
