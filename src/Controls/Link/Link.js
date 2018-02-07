import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import styles from './Link.css';

export default class Link extends Component {
  renderIcon = () => {
    if (this.props.Icon) {
      return(
        <div className={this.props.Icon}></div>
      );
    }
    return null;
  }

  render() {
    return (
      <div className={`${styles.Link} 
        ${this.props.Blue === true ? styles.Blue : ''}
        ${this.props.White === true ? styles.White : ''}
        ${this.props.Green === true ? styles.Green : ''}
        ${this.props.Red === true ? styles.Red : ''}
        ${this.props.Black === true ? styles.Black : ''}
        `}>
          {this.renderIcon()}
          <div className={styles.Text}>
            {this.props.text} 
          </div>
      </div>
    );
  }
}

