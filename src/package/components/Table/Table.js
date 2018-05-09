import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Table.css'
import Checkbox from './../Checkbox/Checkbox'
import Link from './../Link/Link'

const cx = classNames.bind(styles)

export default class Table extends Component {
  static get propTypes () {
    return {
      children: PropTypes.Array,
      Fixed: PropTypes.boolean,
      styleName: PropTypes.string
    }
  };

  render () {
    const { styleName, Fixed } = this.props

    const className = cx(styles.Table, styleName, {
      Fixed
    })

    return (
      <div className={className}>
        <table>
          <thead>
            <tr>
              <th />
              <th>Channel</th>
              <th>Delaying messages</th>
              <th>Default delay value</th>
              <th>Maximum delay value</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Checkbox name='nameA' id='xxx' />
              </td>
              <td>
                <span>acc.socialmedia@homecredit.co.id</span>
              </td>
              <td>
                test
              </td>
              <td>
              testtest
              </td>
              <td>
              testtesttest
              </td>
              <td>
                <Link Icon='be-icon-pencil' Blue text='Edit' />
              </td>
              <td>
                <Link Icon='be-icon-trash' />
              </td>
            </tr>
            <tr>
              <td>
                <Checkbox name='nameA' id='yyy' />
              </td>
              <td>
                <span>acc.nevim@nevim.co.id</span>
              </td>
              <td>
                test2131
              </td>
              <td>
              testtest32
              </td>
              <td>
              testtesttest31
              </td>
              <td>
                <Link Icon='be-icon-pencil' Blue text='Edit' />
              </td>
              <td>
                <Link Icon='be-icon-trash' />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
