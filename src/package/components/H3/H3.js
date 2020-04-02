// @flow

import * as React from "react";
// @flow-skip-next-line
import classNames from "classnames/bind";
import styles from "./H3.module.css";

const cx = classNames.bind(styles);

type Props = {
  children?: React.Node,
  styleName: string
};

export default class H3 extends React.Component<Props> {
  render() {
    const { styleName, children } = this.props;

    const className = cx(styles.H3, styleName);

    return <h3 className={className}>{children}</h3>;
  }
}
