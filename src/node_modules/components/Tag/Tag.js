import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Tag.css';

const cx = classNames.bind(styles);

export default class Tag extends Component {

  static get propTypes() {
    return {
      text: PropTypes.string,
      color: PropTypes.string,
      styleName: PropTypes.string
    };
  };

  render() {
    const { styleName, color } = this.props;

    const className = cx(styles.Tag, styleName, {
      Pink: color==="Pink",
      Yellow: color==="Yellow",
      Green: color==="Green",
      Blue: color==="Blue",
      LightBlue: color==="LightBlue",
      Purple: color==="Purple",
      Turquoise: color==="Turquoise",
      DarkPurple: color==="DarkPurple",
      Red: color==="Red",
      Grey: color==="Grey"
    });

    return (
      <div className={className}>
        {this.props.text}
      </div>
    );
  }
}