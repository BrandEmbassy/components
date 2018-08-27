// @flow
import * as React from 'react'
import Image from '../Image'
import Video from '../Video'
import styles from './index.css'

export type FileElementsProps = {
  type: 'FILE',
  url: string,
  mimeType: string,
  filename?: string,
  topLevel: boolean
}

export default function File ({url, mimeType, filename, topLevel}: FileElementsProps) {
  if (mimeType.indexOf('image') >= 0) {
    return (
      <Image
        src={url}
        title={url}
        mimeType={mimeType}
        topLevel={topLevel}
      />
    )
  }

  if (mimeType.indexOf('video') >= 0) {
    return (
      <Video
        url={url}
        title={url}
        mimeType={mimeType}
        topLevel={topLevel}
      />
    )
  }

  return (
    <div className={styles.messageFile}>
      <span className='message--icon be-icon-file' />
      <a href={url} title={url} download target='_blank' className={styles.messageFilename}>
        {filename || url}
        <span className='message--icon be-icon-download-1' />
      </a>
    </div>
  )
}
