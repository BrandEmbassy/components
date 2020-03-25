// @flow

import * as React from "react";
// @flow-skip-next-line
import classNames from "classnames/bind";
import styles from "./ProfilePicture.module.css";

const cx = classNames.bind(styles);

type Props = {
  imgSrc: string,
  Size60: string,
  Size40: string,
  Size24: string,
  Size20: string,
  Size16: string,
  styleName: string
};

export default class ProfilePicture extends React.Component<Props> {
  render() {
    const {
      styleName,
      Size60,
      Size40,
      Size24,
      Size20,
      Size16,
      imgSrc
    } = this.props;

    const className = cx(styles.ProfilePicture, styleName, {
      Size60,
      Size40,
      Size24,
      Size20,
      Size16
    });

    return (
      <div className={className}>
        <img src={imgSrc} alt="" width="100%" height="100%" />
      </div>
    );
  }
}
