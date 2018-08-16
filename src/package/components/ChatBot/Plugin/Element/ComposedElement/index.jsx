import React from 'react'
import Element from '../Element'
import styles from './index.css'

export default function ComposedElement ({ elements, onClick, hideButtons, showTextAsMessage }) {
  return (
    <div className={styles.ComposedElement}>
      {elements.map(({ id, ...rest }) => (
        <Element
          key={id}
          id={id}
          {...rest}
        />
      )
      )}
    </div>
  )
}
