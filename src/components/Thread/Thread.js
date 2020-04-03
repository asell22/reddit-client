import React from 'react';
import redditLogo from './reddit.png';
import styles from './Thread.module.css';

const thread = (props) => {
  const { title, thumbnail , url} = props;
  const imgSrc = thumbnail || redditLogo;

  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer" className={styles['Thread']}>
        <span className={styles['Img']}>
          <img width="40" height="40" src={imgSrc} alt={title} /> 
        </span>
        <span className={styles['Title']}>{title}</span>
      </a>
    </li>
  );
}

export default thread;