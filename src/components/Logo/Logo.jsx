import React from 'react';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logoType}>
      <a href="/html" className={styles.logo}><strong>Freelancer</strong> portfolio</a>
    </div>
  )
}
