// @flow

import * as React from "react";
import styles from "./ButtonGroup.module.css";

type Props = {
  children?: React.Node
};

export default class ButtonGroup extends React.Component<Props> {
  render() {
    return <div className={styles.ButtonGroup}>{this.props.children}</div>;
  }
}
