// @flow

import * as React from "react";
// @flow-skip-next-line
import classNames from "classnames/bind";
import styles from "./Input.module.css";

const cx = classNames.bind(styles);

type Props = {
  onChange: Function,
  label: string,
  name: string,
  type: string,
  value: string,
  placeholder: string,
  isDisabled: boolean,
  isError: boolean,
  desc: string,
  styleName: string
};

export default class Input extends React.Component<Props> {
  renderLabel() {
    if (this.props.label) {
      return <div className={styles.Label}>{this.props.label}</div>;
    }
    return null;
  }

  renderDesc() {
    if (this.props.desc) {
      return (
        <div className={`${styles.Desc} ${styles.isRed} `}>
          {this.props.desc}
        </div>
      );
    }
    return null;
  }

  render() {
    const {
      isDisabled,
      isError,
      styleName,
      type,
      name,
      placeholder,
      onChange,
      value
    } = this.props;

    const className = cx(styles.Input, styleName, {
      Disabled: isDisabled,
      Error: isError
    });

    return (
      <div className={className}>
        {this.renderLabel()}
        <div className={styles.Field}>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            disabled={isDisabled}
            onChange={onChange}
            value={value}
          />
        </div>
        {this.renderDesc()}
      </div>
    );
  }
}
