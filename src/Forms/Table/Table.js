import React, { Component } from 'react';
import styles from './Table.css';
import Checkbox from './../Checkbox/Checkbox';
import Link from './../../Controls/Link/Link';

export default class Table extends Component {
  render() {
    return (
      <div className={`${styles.Table} ${this.props.Fixed === true ? styles.Fixed : ''}`}>
        <table>
          <thead>
            <tr>
                <th></th>
                <th>Channel</th>
                <th>Delaying messages</th>
                <th>Default delay value</th>
                <th>Maximum delay value</th>
                <th></th>
                <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Checkbox name="nameA" id="xxx"/>
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
                <Link Icon="be-icon-pencil" Blue text="Edit"/>
              </td>
              <td>
              <Link Icon="be-icon-trash"/>
              </td>
            </tr>
            <tr>
              <td>
                <Checkbox name="nameA" id="yyy"/>
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
              <Link Icon="be-icon-pencil" Blue text="Edit"/>
              </td>
              <td>
              <Link Icon="be-icon-trash"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
