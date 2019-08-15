import React from 'react'
import Element from '../Element'
import styles from './index.module.css'

export default function ComposedElement ({ elements, level, ...composedElementRestProps }) {
  const standalone = elements.length === 1 && level === 1
  return (
    <div className={styles.ComposedElement}>
      {elements.map(({ id, ...rest }) => (
        <Element
          {...composedElementRestProps}
          {...rest}
          key={id}
          id={id}
          level={level}
          standalone={standalone}
        />
      )
      )}
    </div>
  )
}
