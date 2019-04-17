import * as React from 'react'
import styles from './index.css'

export type ImageElementProps = {
  src: string,
  title: string,
  onLoad?: Function
}

export default function Image ({ src, title, onLoad }) {
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
    <div className={styles.ImageWrapper}>
      {isLoading && <div className='be-icon-multi-image' />}
      <div className={styles.Image}>
        <img
          src={src}
          title={title}
          onLoad={handleOnLoad}
        />
      </div>
    </div>
  )
}
