import React, { Component } from 'react';
import styles from './Table.css';

export default class Table extends Component {
  render() {
    return (
      <div className={styles.Table}>
        <table>
          <thead>
            <tr>
                <th>Channel</th>
                <th className={styles.Fix200}>Delaying messages</th>
                <th className={styles.Fix200}>Default delay value</th>
                <th className={styles.Fix200}>Maximum delay value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>acc.socialmedia@homecredit.co.id</span>
              </td>
              <td className={styles.Fix200}>
                test
              </td>
              <td className={styles.Fix200}>
              testtest
              </td>
              <td className={styles.Fix200}>
              testtesttest
              </td>
            </tr>
            <tr>
              <td>
                <span>acc.nevim@nevim.co.id</span>
              </td>
              <td className={styles.Fix200}>
                test2131
              </td>
              <td className={styles.Fix200}>
              testtest32
              </td>
              <td className={styles.Fix200}>
              testtesttest31
              </td>
            </tr>
            <tr>
              <td>
                <span>nic@homecredit.co.id</span>
              </td>
              <td className={styles.Fix200}>
                test42
              </td>
              <td className={styles.Fix200}>
              testtest32
              </td>
              <td className={styles.Fix200}>
              testtesttest213
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
