// @flow
import * as React from 'react'
import styles from './index.css'

type Props = {
  label: string,
  onClick?: Function,
  postback?: string,
  url?: string
}

export default class Button extends React.PureComponent<Props> {

  renderButton (label: string, postback: ?string, onClick: ?Function): React.Node {
    const clickHandler = onClick && postback ? () => onClick(postback, label) : null
    return (
      <div>
        <button className={styles.Button} onClick={clickHandler} title={label}>
          {label}
        </button>
      </div>
    )
  }

  renderLink (label: string, url: string): React.Node {
    return (<a className={styles.Button} href={url} title={label} target='_blank'>{label}</a>)
  }

  render () {
    const { postback, label, onClick, url } = this.props

    if (url) {
      return this.renderLink(label, url)
    }
    return this.renderButton(label, postback, onClick)
  }

}
