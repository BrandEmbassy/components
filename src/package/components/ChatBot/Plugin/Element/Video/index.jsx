import React from 'react'
import { Player, ControlBar,
  VolumeMenuButton, PlayToggle,
  ProgressControl
} from 'video-react'

import styles from './index.css'

export type VideoElementProps = {
  url: string,
  mimeType: string
}

export default function ({url, mimeType}: VideoElementProps) {
  return (
    <div className={styles.VideoWrapper}>
      <div className={styles.Video}>
        <Player disableDefaultControls>
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
