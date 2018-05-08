import React from 'react'
import styles from './index.css'

export default function Button ({ label, onClick, postback }) {
  return (
    <div>
      <button className={styles.Button} onClick={() => onClick(postback, label)}>
        {label}
      </button>
    </div>
  )
}
