import React from 'react'
import styles from './index.css'

export type ImageElementProps = {
  src: string,
  title: string
}

export default function NewImage ({ src, title }) {
  return (
    <div className={styles.ImageWrapper}>
      <div className={styles.Image}>
        <a href={src} target='_blank' download>
          <img className={styles.MessageImg} src={src} />
        </a>
      </div>
    </div>
  )
}
