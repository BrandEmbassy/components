// @flow

import * as React from "react";
// @flow-skip-next-line
import classNames from "classnames/bind";
import styles from "./../Button/Button.module.css";

const cx = classNames.bind(styles);

type Props = {
  text: string,
  // type: string,
  // nastavit type jako props s defaultem text
  styleName: string
};

export default class Submit extends React.Component<Props> {
  render() {
    const { styleName } = this.props;

    const className = cx(styles.Button, styleName);

    return (
      <input className={className} type="submit" value={this.props.text} />
    );
  }
}
