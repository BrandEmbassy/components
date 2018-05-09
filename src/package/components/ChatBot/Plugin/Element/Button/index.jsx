import React from 'react'
import styles from './index.css'

export default function Button ({ label, onClick, postback }) {
  const clickHandler = onClick ? () => onClick(postback, label) : null

  return (
    <div>
      <button className={styles.Button} onClick={clickHandler}>
        {label}
      </button>
    </div>
  )
}
