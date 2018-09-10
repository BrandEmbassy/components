import React, { Component } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line
import Header from './../../package/components/Header/Header'
import Button from './../../package/components/Button/Button'
import Row from './../../package/components/Row/Row'
import Col from './../../package/components/Col/Col'
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
            <Row>
              <Col>
                <Button text='dadawdawdawda' />
              </Col>
            </Row>
          </div>
          <div className={styles.Flexrows}>
            <div className={styles.Static}>
              <Header />
            </div>
            <div className={styles.Flex}>
              <Row>
                <Button Small text='Add someting' Icon='be-icon-plus' /> <br /><br />
              </Row>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
