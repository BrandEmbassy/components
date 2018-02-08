import React, { Component } from 'react';
import classNames from 'classnames/bind';
import '!style-loader!css-loader!./../../styles/Base.css';
import styles from './Link.css';

const cx = classNames.bind(styles);

export default class Link extends Component {
  renderIcon() {
    if (this.props.Icon) {
      return(
        <div className={this.props.Icon}></div>
      );
    }
    return null;
  }

  render() {
    const { Blue, White, Green, Red, Black } = this.props;

    const className = cx(styles.Link, {
      Blue,
      White,
      Green,
      Red,
      Black
    });

    return (
      <a className={className}>
          {this.renderIcon()}
          <div className={styles.Text}>
            {this.props.text}
          </div>
      </a>
    );
  }
}
