import * as React from 'react'
import { Player, ControlBar,
  VolumeMenuButton, PlayToggle,
  ProgressControl
} from 'video-react'
import ElementType from '../ElementType'
import type IElement from '../Element'
import styles from './index.module.css'

export type VideoElementProps = {
  url: string
}

export function isPluginVideo (elements: Array<IElement>): boolean {
  return elements.length === 1 && elements[0].type === ElementType.FILE && elements[0].mimeType.indexOf('video') >= 0
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
