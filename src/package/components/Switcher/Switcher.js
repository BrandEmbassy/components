import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Switcher.css';

const cx = classNames.bind(styles);

export default class Switcher extends Component {

  static get propTypes() {
    return {
      isActive: PropTypes.boolean,
      styleName: PropTypes.string 
    };
  };

  constructor(props) {
    super(props);
    this.state = { isActive: this.props.isActive };
  }

  render() {
    const { styleName, isActive } = this.props;

    const className = cx(styles.Switcher, styleName, {
      isActive
    });

    return (
      <div
        onClick={(e) => {
          e.stopPropagation();
          this.setState({ isActive: !this.state.isActive });
        }}
        className={className}>
        <div className="Label Label--on">On</div>
        <div className="Switch" />
        <div className="Label Label--off">Off</div>
      </div>
    );
  }
}
