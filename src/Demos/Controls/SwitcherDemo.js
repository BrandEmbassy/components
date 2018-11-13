import React, { Component } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line

import StorybookHighlighter from './../../utils/StorybookHighlighter'
import Switcher from '../../package/components/Switcher/Switcher'

const importComponent = `import { Switcher } from 'components';`

export default class SwitcherDemo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  hanlerSwitcherClick = () => {
    this.setState({isActive: !this.state.isActive})
  }

  render () {
    const { isActive } = this.state

    return (
      <div className='container'>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <h2 className='h2'>Switcher</h2>
            <h3 className='h3'>{importComponent}</h3>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12'>
            <Switcher SwitcherClick={this.hanlerSwitcherClick} isActive={isActive} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12'>
            <StorybookHighlighter >
              <Switcher />
            </StorybookHighlighter>
          </div>
        </div>

      </div>
    )
  }
}
