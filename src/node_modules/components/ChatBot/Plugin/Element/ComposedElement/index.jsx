import React from 'react'
import Element from '../Element'
import styles from './index.css'

export default function ComposedElement({ elements, onClick, hideButtons }) {
  return (
    <div className={styles.ComposedElement}>
      {elements.map(({ id, type, text, url, postback, elements }) => (
        <Element
          key={id}
          id={id}
          type={type}
          text={text}
          url={url}
          postback={postback}
          elements={elements}
          onClick={onClick}
          hideButtons={hideButtons}
        />
      )
      )}
    </div>
  )
}
