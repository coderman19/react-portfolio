import React from 'react';
import styles from './Footer.module.css';

import vk from '../../img/icons/Vector-1.svg';
import twitter from '../../img/icons/Vector-2.svg';
import github from '../../img/icons/Vector-3.svg';
import linkedin from '../../img/icons/Vector-4.svg';
import instagramm from '../../img/icons/Vector.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
          <div className="container">
            <div className={styles.footer__wrapper}>
              <ul className={styles.social}>
                <li className="social__item"><a href="#!"><img src={vk} alt="link"/></a></li>
                <li className="social__item"><a href="#!"><img src={twitter} alt="link"/></a></li>
                <li className="social__item"><a href="#!"><img src={github} alt="link"/></a></li>
                <li className="social__item"><a href="#!"><img src={linkedin} alt="link"/></a></li>
                <li className="social__item"><a href="#!"><img src={instagramm} alt="link"/></a></li>
              </ul>
              <div className="copyright">
                <p>
                  @t.me/freecode_22 
                </p>
              </div>
            </div>   
          </div>
    </footer>
  )
}
