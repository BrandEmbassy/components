import React from 'react'
import styles from './Bubble.css'

export default function Bubble ({ text }) {
  return <div className={styles.Bubble}>{text}</div>
}
