// @flow
import * as React from 'react'
import styles from './index.css'

export type ImageElementProps = {
  src: string,
  title: string,
  onLoad?: Function
}

type Props = {
  src: string,
  title?: string,
  onLoad?: Function,
}

export default function StandaloneImage ({ src, title, onLoad }: Props): React.Node {
  const [isLoading, setIsLoading] = React.useState(true)
  const handleOnLoad = () => setIsLoading(false)
  React.useEffect(
    () => {
      if (isLoading === false && onLoad && typeof onLoad === 'function') {
        onLoad()
      }
    },
    [isLoading]
  )

  return (
    <div className={styles.StandaloneImageWrapper}>
      {isLoading && <div className='be-icon-multi-image' />}
      <div className={styles.ImageIn}>
        <div className={styles.isImage}>
          <img src={src} className={styles.Img} alt='avatar' onLoad={handleOnLoad} />
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
