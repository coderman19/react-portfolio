import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
      <header className={styles.header}>  
            <div className={styles.header__wrapper}>
              <h1 className={styles.header__title}>
                <strong>Hi, my name is <em>Pavel</em></strong><br/>
                a frontend developer
              </h1>
              <div className={styles.header__text}>
                <p>with passion for learning and creating</p>
              </div>
              <a className="btn" href="#!">Visit my GitHub</a>
            </div>
        </header>
  )
}
