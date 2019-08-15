// @flow
import * as React from 'react'
import styles from './index.module.css'

export type ButtonElementProps = {
  type: 'BUTTON',
  label: string,
  text?: string,
  onClick?: Function,
  postback?: string,
  url?: string
}

export default class Button extends React.PureComponent<ButtonElementProps> {
  handleClick = () => {
    const { postback, label, onClick } = this.props
    if (onClick) {
      onClick(postback, label)
    }
  }

  renderButton (label: string): React.Node {
    return (
      <div>
        <button className={styles.Button} onClick={this.handleClick} title={label}>
          {label}
        </button>
      </div>
    )
  }

  renderLink (label: string, url: string): React.Node {
    return (<a className={styles.Button} href={url} title={label} target='_blank'>{label}</a>)
  }

  render () {
    const { label, url } = this.props

    if (url) {
      return this.renderLink(label, url)
    }
    return this.renderButton(label)
  }
}
