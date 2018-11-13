import React, { PureComponent } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line
import Button from './../../package/components/Button/Button'
import StorybookHighlighter from './../../utils/StorybookHighlighter'

const importComponent = `import { Button } from 'components';`

export default class ButtonDemo extends PureComponent {
  render () {
    return (
      <div className='container'>
        <div className='row padding-20'>
          <div className='col-xs-5 '>
            <h2 className='h2'>Button</h2>

            <h3 className='h3'>{importComponent}</h3>

            <Button text='Button' />
            <StorybookHighlighter >
              <Button text='Button' />
            </StorybookHighlighter>
          </div>
          <div className='col-xs-5 col-xs-offset-1'>
            <h2 className='h2'>small</h2>
            <Button text='button' Small />
            <StorybookHighlighter >
              <Button text='button' Small />
            </StorybookHighlighter >
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-5 '>
            <h2 className='h2'>Icon</h2>
            <Button text='Button' Icon='be-icon-plus' />
            <StorybookHighlighter >
              <Button text='Button' Icon='be-icon-plus' />
            </StorybookHighlighter>
          </div>
          <div className='col-xs-5 col-xs-offset-1'>
            <h2 className='h2'>cancel</h2>
            <Button text='button' isNegative Icon='be-icon-cross' />
            <StorybookHighlighter >
              <Button text='button' Negative Icon='be-icon-cross' />
            </StorybookHighlighter >
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-5 '>
            <h2 className='h2'>Negative</h2>
            <Button text='Button' Negative />
            <StorybookHighlighter >
              <Button text='Button' Negative />
            </StorybookHighlighter >
          </div>
          <div className='col-xs-5 col-xs-offset-1'>
            <h2 className='h2'>small</h2>
            <Button text='button' Negative Small />
            <StorybookHighlighter >
              <Button text='button' Negative Small />
            </StorybookHighlighter >
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-5 '>
            <h2 className='h2'>Disabled</h2>
            <Button text='Button' Disabled />
            <StorybookHighlighter >
              <Button text='Button' Disabled />
            </StorybookHighlighter >
          </div>
          <div className='col-xs-5 col-xs-offset-1'>
            <h2 className='h2'>small</h2>
            <Button text='button' Disabled Small />
            <StorybookHighlighter >
              <Button text='button' Disabled Small />
            </StorybookHighlighter >
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-5 '>
            <h2 className='h2'>Cancel</h2>
            <Button text='Button' Cancel />
            <StorybookHighlighter >
              <Button text='Button' Cancel />
            </StorybookHighlighter >
          </div>
          <div className='col-xs-5 col-xs-offset-1'>
            <h2 className='h2'>small</h2>
            <Button text='button' Cancel Small />
            <StorybookHighlighter >
              <Button text='button' Cancel Small />
            </StorybookHighlighter >
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-5 '>
            <h2 className='h2'>Reversed</h2>
            <Button text='Button' Reversed />
            <StorybookHighlighter >
              <Button text='Button' Reversed />
            </StorybookHighlighter >
          </div>
          <div className='col-xs-5 col-xs-offset-1'>
            <h2 className='h2'>small</h2>
            <Button text='button' Reversed Small />
            <StorybookHighlighter >
              <Button text='button' Reversed Small />
            </StorybookHighlighter >
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-5 '>
            <h2 className='h2'>Wide</h2>
            <Button text='Button' Wide />
            <StorybookHighlighter >
              <Button text='Button' Wide />
            </StorybookHighlighter >
          </div>
          <div className='col-xs-5 col-xs-offset-1'>
            <h2 className='h2'>small</h2>
            <Button text='button' Wide Small />
            <StorybookHighlighter >
              <Button text='button' Wide Small />
            </StorybookHighlighter >
          </div>
        </div>
      </div>
    )
  }
}
