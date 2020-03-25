// @flow

import * as React from "react";
import styles from "./Linklist.module.css";

type Props = {
  children?: React.Node
};

export default class Linklist extends React.PureComponent<Props> {
  render(): React.Node {
    return <div className={styles.Linklist}>{this.props.children}</div>;
  }
}
