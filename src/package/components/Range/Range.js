// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Range.css'

const cx = classNames.bind(styles)

type Props = {
  styleName: string,
  RangeClick: Function,
  round?: boolean
}

export default class Range extends React.Component<Props> {
  constructor(props) {
    super(props);
 
    this.state = { value: 5 };
  }

  handleChange = (event) => {
    this.setState({value:event.target.value})
  }

  render () {
    const { styleName, RangeClick, round } = this.props
    const { slider, slidecontainer } = styles


    return (
      <div className={slidecontainer}>
        {this.state.value}
        <input 
          type="range" 
          min="1" 
          max="10" 
          value={this.state.value}
          className={slider}  
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
