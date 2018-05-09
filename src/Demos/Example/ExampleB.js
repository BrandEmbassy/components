import React, { Component } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line
import Header from './../../package/components/Header/Header'
import Button from './../../package/components/Button/Button'
import styles from './../../App.css'

export default class ExampleB extends Component {
  render () {
    return (
      <div className={styles.App}>
        <div className={styles.Static}>
          <div className='row'>
            <Header />
          </div>
        </div>
        <div className={styles.Flexcols}>
          <div className={styles.Static}>

            <Button text='dadawdawdawda' />

          </div>
          <div className={styles.Flexrows}>
            <div className={styles.Static}>
              <Header />
            </div>
            <div className={styles.Flex}>

              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />

              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />

              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
