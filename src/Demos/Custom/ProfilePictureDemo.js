import React, { Component } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line
import ProfilePicture from './../../package/components/ProfilePicture/ProfilePicture'
import StorybookHighlighter from './../../utils/StorybookHighlighter'

const importComponent = `import { ProfilePicture } from 'components';`

export default class ProfilePictureDemo extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row padding-20'>
          <div className='col-xs-12' >
            <h2 className='h2'>Profile Pic</h2>
            <h3 className='h3'>{importComponent}</h3>
          </div>

          <div className='col-xs-6'>
            <h3 className='h3'>Size</h3>
            <h4 className='h4'>for 60px use class Size60</h4>
            <h4 className='h4'>for 40px use class Size40</h4>
            <h4 className='h4'>32px is default</h4>
            <h4 className='h4'>for 24px use class Size24</h4>
            <h4 className='h4'>for 20px use class Size20</h4>
            <h4 className='h4'>for 16px use class Size16</h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 ' >
            <ProfilePicture Size60 />
            <ProfilePicture Size40 />
            <ProfilePicture />
            <ProfilePicture Size24 />
            <ProfilePicture Size20 />
            <ProfilePicture Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <StorybookHighlighter >
              <ProfilePicture Size24 />
            </StorybookHighlighter >
          </div>
        </div>
      </div>
    )
  }
}
