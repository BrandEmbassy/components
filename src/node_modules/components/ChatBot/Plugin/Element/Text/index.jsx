import React from 'react'
import styles from './index.css'

export default function Text ({ content, showAsMessage = false }) {
  const className = showAsMessage ? styles.MessageText : styles.Text
  return <p className={className}>{content}</p>
}
