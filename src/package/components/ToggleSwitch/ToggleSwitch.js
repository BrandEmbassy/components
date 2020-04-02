// @flow

import * as React from "react";
// @flow-skip-next-line
import classNames from "classnames/bind";
import styles from "./ToggleSwitch.module.css";

const cx = classNames.bind(styles);

type Props = {
  styleName: string,
  ToggleSwitchClick: Function,
  round?: boolean
};

export default class ToggleSwitch extends React.Component<Props> {
  render() {
    const { styleName, ToggleSwitchClick, round } = this.props;
    const { slider, Switch } = styles;

    const className = cx(slider, styleName, {
      round
    });

    return (
      <label className={Switch} onClick={ToggleSwitchClick} data-jest="click">
        <input type="checkbox" />
        <span className={className} />
      </label>
    );
  }
}
