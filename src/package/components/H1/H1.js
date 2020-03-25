// @flow

import * as React from "react";
// @flow-skip-next-line
import classNames from "classnames/bind";
import styles from "./H1.module.css";

const cx = classNames.bind(styles);

type Props = {
  styleName: string,
  children?: React.Node
};

export default class H1 extends React.Component<Props> {
  render() {
    const { styleName, children } = this.props;

    const className = cx(styles.H1, styleName);

    return <h1 className={className}>{children}</h1>;
  }
}
