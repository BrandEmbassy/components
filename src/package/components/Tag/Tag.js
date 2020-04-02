// @flow

import * as React from "react";
// @flow-skip-next-line
import classNames from "classnames/bind";
import styles from "./Tag.module.css";

const cx = classNames.bind(styles);

type Props = {
  text: string,
  color: string,
  styleName: string
};

export default class Tag extends React.Component<Props> {
  render() {
    const { styleName, color } = this.props;

    const className = cx(styles.Tag, styleName, {
      Pink: color === "Pink",
      Yellow: color === "Yellow",
      Green: color === "Green",
      Blue: color === "Blue",
      LightBlue: color === "LightBlue",
      Purple: color === "Purple",
      Turquoise: color === "Turquoise",
      DarkPurple: color === "DarkPurple",
      Red: color === "Red",
      Grey: color === "Grey"
    });

    return <div className={className}>{this.props.text}</div>;
  }
}
