import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Textarea.css';

const cx = classNames.bind(styles);

export default class Textarea extends Component {

  static get propTypes() {
    return {
      children: PropTypes.Array,
      name: PropTypes.string,
      rows: PropTypes.number,
      value: PropTypes.string,
      placeholder: PropTypes.string,
      isDisabled: PropTypes.boolean,
      isError: PropTypes.boolean,
      onChange: PropTypes.func,
      desc: PropTypes.string,
      styleName: PropTypes.string
    };
  };

  renderLabel() {
    if (this.props.label) {
      return (
        <div className={styles.Label}>
          {this.props.label}
        </div>
      );
    }
    return null;
  }

  render() {
    const { styleName, isDisabled, isError } = this.props;

    const className = cx(styles.Textarea, styleName, {
      Disabled: isDisabled,
      Error: isError
    });

    return (
      <div className={className}>
        {this.renderLabel()}
        <div className={styles.Field}>
        <textarea 
          name={this.props.name} 
          rows={this.props.rows}
          value={this.props.value} 
          placeholder={this.props.placeholder} 
          disabled={this.props.isDisabled} 
          onChange={this.props.onChange} />
        </div>
        <div className={`${styles.Desc} ${styles.isRed} `}>
          {this.props.desc}                
        </div>
      </div>
    );
  }
}
