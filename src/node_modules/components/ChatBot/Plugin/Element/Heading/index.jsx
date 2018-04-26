import React from 'react'
import styles from './index.css'

export const TITLE_HEADING_LEVEL = 1
export const SUBTITLE_HEADING_LEVEL = 2

export default function Heading({ content, level = TITLE_HEADING_LEVEL }) {
  if (level === TITLE_HEADING_LEVEL) {
    return <h1 className={styles.Heading}>{content}</h1>
  }
  return <h2 className={styles.SubHeading}>{content}</h2>
}
