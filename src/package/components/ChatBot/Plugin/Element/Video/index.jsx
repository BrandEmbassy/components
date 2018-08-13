import React from 'react'
import styles from './index.css'

export type VideoElementProps = {
  url: string,
  mimeType: string
}

export default function ({url, mimeType}: VideoElementProps) {
  return (
    <div className={styles.VideoWrapper}>
      <div className={styles.Video}>
        <video controls>
          <source src={url} type={mimeType} />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
