import React, { Component } from 'react'
import '!style-loader!css-loader!../../package/components/Base.css' //eslint-disable-line
import Header from '../../package/components/Header/Header'
import ErrorPage from '../../package/components/ErrorPage/ErrorPage'
import styles from './../../App.css'

export default class ErrorDemo extends Component {
  render () {
    return (
      <div className={styles.App}>
        <div className={styles.Flexrows}>
          <div className={styles.Flex}>
            <ErrorPage />
          </div>
        </div>
      </div>
    )
  }
}
