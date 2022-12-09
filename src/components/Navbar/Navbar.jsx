import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

import Logo from '../Logo/Logo';
import Mode from '../Mode/Mode';

export default function Navbar() {

  const activeLink = 'nav__list-link nav__list-link--active';
  const normalLink = 'nav__list-link';


  return (
    <div className={styles.navbar}>
      <nav className="nav">
          <div className="container">
            <div className={styles.nav__row}>
             <NavLink 
              to='/'>
                <Logo />
             </NavLink>
              
              <Mode />

              <ul className={styles.nav__list}>
                <NavLink
                  to='/'  
                  className={({isActive}) => isActive ? activeLink : normalLink}>
                    Home
                </NavLink>

                <NavLink
                  to='/projects'  
                  className={({isActive}) => isActive ? activeLink : normalLink}>
                    Projects
                </NavLink>

                <NavLink
                  to='/contacts'  
                  className={({isActive}) => isActive ? activeLink : normalLink}>
                    Contacts
                </NavLink>
                
                {/* <li className="nav__list-item"><a href="/skills.html" className="nav__list-link">Skills</a></li>
                <li className="nav__list-item"><a href="/contacts.html" className="nav__list-link">Contacts</a></li> */}
              </ul>
            </div>
          </div>
      </nav>
    </div>
  )
}
