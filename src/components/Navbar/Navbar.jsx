import React from 'react';
import styles from './Navbar.module.css';

import Logo from '../Logo/Logo';
import Mode from '../Mode/Mode';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav className="nav">
          <div className="container">
            <div className={styles.nav__row}>
              <Logo />
              <Mode />

              <ul className={styles.nav__list}>
                <li className="nav__list-item"><a href="/project_page.html" className="nav__list-link nav__list-link--active">Projects</a></li>
                <li className="nav__list-item"><a href="/skills.html" className="nav__list-link">Skills</a></li>
                <li className="nav__list-item"><a href="/contacts.html" className="nav__list-link">Contacts</a></li>
              </ul>
            </div>
          </div>
      </nav>
    </div>
  )
}
