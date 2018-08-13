// @flow
import * as React from 'react'
import Image from '../Image'
import Video from '../Video'

export type FileElementsProps = {
  url: string,
  mimeType: string,
  title?: string
}

export default function File ({url, mimeType, title}: FileElementsProps) {

  if (mimeType.indexOf('image') >= 0) {
    return <Image src={url} />
  }

  if (mimeType.indexOf('video') >= 0) {
    return (
      <Video
        url={url}
        mimeType={mimeType}
        title={title}
      />
    )
  }

  return (
    <a href={url} title={title} download>{title || url}</a>
  )
}
