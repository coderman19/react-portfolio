import React from 'react';
// import project01 from './../../img/projects/01.jpg';
import styles from './Project.module.css';

export default function Project({title, img}) {
  return (
    <>
      <li className={styles.project}>
        <a href="/project_page.html">
          <img className={styles.project__img} src={img} alt={title} />
          <h3 className={styles.project__title}>{title}</h3>
        </a>
      </li>
    </>
  )
}
