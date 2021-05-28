// @flow

import * as React from 'react'
import styles from './Pagination.module.css'

type Props = {
  onClick: Function,
  children?: React.Node
}

export default class Pagination extends React.Component<Props> {
  render () {
    return (
      <div className={styles.paginationComponent}>
        <table className={styles.table}>
          <tr>
            <td className={styles.td}>
              <div className={styles.displayCounts}>Display 1 - 10 of 20</div>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}
