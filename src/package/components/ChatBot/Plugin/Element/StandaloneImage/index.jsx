// @flow
import * as React from 'react'
import styles from './index.css'

export type ImageElementProps = {
  src: string,
  title: string
}

type Props = {
  src: string,
  title?: string
}

export default function StandaloneImage ({ src, title }: Props): React.Node {
  return (
    <div className={styles.StandaloneImageWrapper}>
      <div className={styles.ImageIn}>
        <div className={styles.isImage}>
          <img src={src} className={styles.Img} alt='avatar' />
          <div className={styles.Mask}>
            <div className={styles.Pointer}>
              <a href={src} className='be-icon-enlarge' target='_blank' />
            </div>
          </div>
          <div className={styles.Download}>
            <div className={styles.Pointer}>
              <a href={src} className='be-icon-download-1' target='_blank' download />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
