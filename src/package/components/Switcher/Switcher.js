// @flow

import * as React from "react";
// @flow-skip-next-line
import classNames from "classnames/bind";
import styles from "./Switcher.module.css";

const cx = classNames.bind(styles);

type Props = {
  title: string,
  styleName: string,
  isActive: boolean,
  SwitcherClick: Function
};

export default class Switcher extends React.Component<Props> {
  render() {
    const { styleName, isActive, SwitcherClick } = this.props;
    const { Switcher, Switch, Label, LabelOn, LabelOff } = styles;

    const On = cx(Label, LabelOn);
    const Off = cx(Label, LabelOff);
    const className = cx(Switcher, styleName, {
      isActive
    });

    return (
      <div className={className} onClick={SwitcherClick} data-jest="click">
        <div className={On}>On</div>
        <div className={Switch} />
        <div className={Off}>Off</div>
      </div>
    );
  }
}
