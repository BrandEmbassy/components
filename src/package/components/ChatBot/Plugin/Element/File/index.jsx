// @flow
import * as React from 'react'
import Image from '../Image'
import Video from '../Video'
import Label from '../../../../Label'
import Channel from '../../../../Channel'

export type FileElementsProps = {
  type: 'FILE',
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
    <a href={url} title={title} download>
      <strong>
        <Label text={title || url} styleName="myStylename">
          <Channel type='facebook' />
        </Label>
      </strong>
    </a>
  )
}
