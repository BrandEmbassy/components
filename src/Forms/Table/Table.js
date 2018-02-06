import React, { Component } from 'react';
import styles from './Table.css';

export default class Table extends Component {
  render() {
    return (
      <div className={`${styles.Table} ${this.props.Fixed === true ? styles.Fixed : ''}`}>
        <table>
          <thead>
            <tr>
                <th>Channel</th>
                <th>Delaying messages</th>
                <th>Default delay value</th>
                <th>Maximum delay value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
