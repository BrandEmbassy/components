import React from 'react'
import styles from './index.css'

export type ImageElementProps = {
  src: string,
  title: string
}

export default function Image ({ src, title }) {
  return (
    <div className={styles.ImageWrapper}>
      <div className={styles.Image}>
        <img src={src} title={title} />
      </div>
    </div>
  )
}
