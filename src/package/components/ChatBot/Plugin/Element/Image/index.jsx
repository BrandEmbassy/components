import React from 'react'
import styles from './index.css'

export default function Image ({ src, title }) {
  return (
    <div className={styles.Image}>
      <img src={src} title={title} />
    </div>
  )
}
