// @flow
import * as React from 'react'
import Image from '../Image'
import StandaloneImage from '../StandaloneImage'
import Video from '../Video'
import styles from './index.module.css'

export type FileElementsProps = {
  type: 'FILE',
  url: string,
  mimeType: string,
  filename?: string,
  level: number,
  standalone: boolean,
  onLoad?: Function,
}

export default function File ({url, mimeType, filename, level, standalone, onLoad}: FileElementsProps) {
  if (mimeType.indexOf('image') >= 0) {
    if (standalone) {
      return (
        <StandaloneImage
          src={url}
          title={filename}
          mimeType={mimeType}
          onLoad={onLoad}
        />
      )
    }

    return (
      <Image
        src={url}
        title={filename}
        mimeType={mimeType}
        onLoad={onLoad}
      />
    )
  }

  if (mimeType.indexOf('video') >= 0) {
    return (
      <Video
        url={url}
        title={url}
        mimeType={mimeType}
        level={level}
      />
    )
  }

  return (
    <a className={styles.FilePlugin} target='_blank' href={url} download>
      <div className={styles.SpinnerIcon}>
        <span className='be-icon-spinner' />
      </div>
      <div className={styles.FileIcon}>
        <span className='be-icon-file-drop' />
      </div>
      <div className={styles.Text}>
        {filename || url}
      </div>
      <div className={styles.FileDownload}>
        <span className='be-icon-download-1' />
      </div>
    </a>
  )
}
