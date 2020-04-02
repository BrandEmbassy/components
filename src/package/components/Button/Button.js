// @flow
import * as React from "react";
// @flow-skip-next-line
import classNames from "classnames/bind";
import styles from "./Button.module.css";

const cx = classNames.bind(styles);

type Props = {
  onClick: Function,
  text: string,
  Icon: string,
  Disabled: boolean,
  Reversed: boolean,
  Negative: boolean,
  Cancel: boolean,
  Small: boolean,
  Wide: boolean,
  styleName: string
};

export default class Button extends React.Component<Props> {
  renderIcon(): ?React.Element<any> {
    if (this.props.Icon) {
      return <div className={this.props.Icon} />;
    }

    return null;
  }

  render() {
    const {
      Disabled,
      Reversed,
      Negative,
      Cancel,
      Small,
      Wide,
      styleName
    } = this.props;

    const className = cx(styles.Button, styleName, {
      Disabled,
      Reversed,
      Negative,
      Cancel,
      Small,
      Wide
    });

    return (
      <button className={className} onClick={this.props.onClick}>
        {this.renderIcon()}
        {this.props.text}
      </button>
    );
  }
}
