import * as React from 'react'
import { Player, ControlBar,
  VolumeMenuButton, PlayToggle,
  ProgressControl
} from 'video-react'

import styles from './index.css'

export type VideoElementProps = {
  url: string
}

export default class Video extends React.Component<VideoElementProps> {
  disableToggleFulscreen = (ref) => {
    if (ref) {
      ref.actions.toggleFullscreen = () => {}
    }
  }

  render () {
    const {url} = this.props
    return (
      <div className={styles.VideoWrapper}>
        <div className={styles.Video}>
          <Player disableDefaultControls ref={this.disableToggleFulscreen}>
            <source src={url} />
            <ControlBar>
              <PlayToggle key='play-toggle' order={1} />
              <ProgressControl order={2} />
              <VolumeMenuButton order={3} />
            </ControlBar>
          </Player>
        </div>
      </div>
    )
  }
}
