// @flow
import * as React from 'react'
import Image from '../Image'
import StandaloneImage from '../StandaloneImage'
import Video from '../Video'
import styles from './index.css'
import './videoPlayerStylesLoader'

export type FileElementsProps = {
  type: 'FILE',
  url: string,
  mimeType: string,
  filename?: string,
  topLevel: boolean
}

export default function File ({url, mimeType, filename, topLevel}: FileElementsProps) {
  if (mimeType.indexOf('image') >= 0) {
    if (topLevel) {
      return (
        <StandaloneImage
          src={url}
          title={filename}
          mimeType={mimeType}
        />
      )
    }

    return (
      <Image
        src={url}
        title={filename}
        mimeType={mimeType}
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
