import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Input.css';

const cx = classNames.bind(styles);

export default class Input extends Component {

  static get propTypes() {
    return {
      onChange: PropTypes.Func,
      label: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      value: PropTypes.string,
      placeholder: PropTypes.string,
      isDisabled: PropTypes.boolean,
      desc: PropTypes.string,
      styleName: PropTypes.string
    };
  };

  render() {
    const { isDisabled, isError, styleName } = this.props;

    const className = cx(styles.Input, styleName, {
      Disabled: isDisabled,
      Error: isError
    });

    return (
      <div className={className}>
        <div className={styles.Label}>
          {this.props.label}
        </div>
        <div className={styles.Field}>
          <input 
            type={this.props.type} 
            name={this.props.name} 
            placeholder={this.props.placeholder} 
            disabled={this.props.isDisabled} 
            onChange={this.props.onChange}
            value={this.props.value} />
        </div>
        <div className={styles.Desc}>
          {this.props.desc}
        </div>
      </div>
    );
  }
}
