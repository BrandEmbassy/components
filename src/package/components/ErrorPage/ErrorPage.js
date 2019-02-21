// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import Button from './../Button/Button'
import styles from './ErrorPage.css'
import image from  './svg/Whitelisted.svg'

const cx = classNames.bind(styles)

type Props = {
  styleName: string,
  talkdesk: boolean
}

export default class Checkbox extends React.Component<Props> {
  render () {
    const { styleName, talkdesk } = this.props

    const className = cx(styles.ErrorPage, styleName, {
      talkdesk
    })

    return (
      <div className={styles.Wrapper} >
        <div className={className}>
          <div className={styles.Picture} >
            <img src={image} />
          </div>
          
          <div className={styles.Title}>
            <span>Uh Oh</span>
            <br/>
            You don’t have permission to access this page
  
            {/* <Button text="Go back" /> */}
            <button className={styles.Button}>
              Go back
            </button>
          </div>
        </div>
      </div>
    )
  }
}
