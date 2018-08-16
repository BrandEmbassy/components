// @flow
import * as React from 'react'
import Image from '../Image'
import Video from '../Video'

export type FileElementsProps = {
  type: 'FILE',
  url: string,
  mimeType: string,
  filename?: string
}

export default function File ({url, mimeType, filename}: FileElementsProps) {
  if (mimeType.indexOf('image') >= 0) {
    return <Image src={url} />
  }

  if (mimeType.indexOf('video') >= 0) {
    return (
      <Video
        url={url}
        mimeType={mimeType}
        title={url}
      />
    )
  }

  return (
    <div className='message--file'>
      <span className='message--icon be-icon-file' />
      <a href={url} title={url} download className='message--file'>
        {filename || url}
        <span className='message--icon be-icon-download-1' />
      </a>
    </div>
  )
}
