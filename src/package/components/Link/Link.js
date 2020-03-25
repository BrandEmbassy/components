// @flow

import * as React from "react";
// @flow-skip-next-line
import classNames from "classnames/bind";
import styles from "./Link.module.css";

const cx = classNames.bind(styles);

type Props = {
  onClick: Function,
  text: string,
  Icon: string,
  Blue: boolean,
  White: boolean,
  Green: boolean,
  Red: boolean,
  Black: boolean,
  styleName: string
};

export default class Link extends React.Component<Props> {
  renderIcon() {
    if (this.props.Icon) {
      return <div className={this.props.Icon} />;
    }
    return null;
  }

  render() {
    const {
      Blue,
      White,
      Green,
      Red,
      Black,
      styleName,
      text,
      onClick
    } = this.props;

    const className = cx(styles.Link, styleName, {
      Blue,
      White,
      Green,
      Red,
      Black
    });

    return (
      <a className={className} onClick={onClick}>
        {this.renderIcon()}
        <div className={styles.Text}>{text}</div>
      </a>
    );
  }
}
