import React from 'react'
import Element from '../Element'
import styles from './index.css'

export default function ComposedElement ({ elements, ...composedElementRestProps }) {
  return (
    <div className={styles.ComposedElement}>
      {elements.map(({ id, ...rest }) => (
        <Element
          key={id}
          id={id}
          {...composedElementRestProps}
          {...rest}
        />
      )
      )}
    </div>
  )
}
