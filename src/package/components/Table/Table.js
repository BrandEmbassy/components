// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Table.css'

const cx = classNames.bind(styles)

type Props = {
  children?: React.Node,
  Fixed: boolean,
  styleName: string,
  isStrippted: boolean,
  hasRowHover: boolean
}

export default class Table extends React.Component<Props> {
  render () {
    const { styleName, Fixed, isStrippted, hasRowHover } = this.props

    const className = cx(styles.Table, styleName, {
      Fixed,
      isStrippted,
      hasRowHover
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
               someting here
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
                maybe
              </td>
              <td>
                and here
              </td>
            </tr>
            <tr>
              <td>
                some checkbox
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
                link
              </td>
              <td>
                link
              </td>
            </tr>
            <tr>
              <td>
              some checkbox
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
              link
              </td>
              <td>
              link
              </td>
            </tr>
            <tr>
              <td>
            some checkbox
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
            link
              </td>
              <td>
            link
              </td>
            </tr>
            <tr>
              <td>
          some checkbox
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
          link
              </td>
              <td>
          link
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
