import React, { Component } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line

import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { renderToString } from 'react-dom/server'
import beautify from 'js-beautify'
import styles from './../../App.css'

const importComponent = `import { Dropdown } from 'components';`

export default class DropdownDemo extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: true
    }
  }

  toggle () {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  toggle2 (e) {
    e.preventDefault()
  }

  render () {
    return (
      <div className={styles.App}>
        <div className='row padding-20'>
          <div className='col-xs-12'>
   
            
          </div>
        </div>
 
      </div>
    )
  }
}
