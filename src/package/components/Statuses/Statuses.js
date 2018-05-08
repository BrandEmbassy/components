import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Statuses.css';

const cx = classNames.bind(styles);

export default class Statuses extends Component {

  static get propTypes() {
    return {
      text: PropTypes.string,
      status: PropTypes.string,
      styleName: PropTypes.string
    };
  };

  renderText() {
    const { status } = this.props;

  //   // return <FormattedMessage id={`${status}`} defaultMessage="Default value if translation is not available" />
  
    if (!status) {
      return "empty";
    } else {
      return (`${status}`) ;
    };
  };

  render() {
    const { styleName, Reversed, status } = this.props;

    const className = cx(styles.Statuses, styleName, {
      Reversed,
      New: status==="New",
      Open: status==="Open",
      Resolved: status==="Resolved",
      Pending: status==="Pending", 
      Escalated: status==="Escalated", 
      Closed: status==="Closed", 
      Trashed: status==="Trashed"
    });

    return (
      <div className={className}>
        {this.renderText()}
      </div>
    );
  }
}

