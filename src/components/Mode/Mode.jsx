import React from 'react';
import styles from './Mode.module.css';

import sun from '../../img/icons/sun-light.svg';
import moon from '../../img/icons/moon-light.svg';

export default function Mode() {
  return (
    <div className={styles.mode}>
          <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
          </button>
    </div>
  )
}
