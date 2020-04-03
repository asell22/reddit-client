import React from 'react';
import Thread from '../Thread/Thread';
import styles from './ThreadsList.module.css';

const format = (str) => {
  return str.replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&apos;/g, "'")
            .replace(/r\//g, '')
}
const threadsList = (props) => {
  const { threads } = props;
  return (
      <ul className={styles['ThreadsList']}>
        { threads.map(thread => {
          const thumbnail = thread.data.preview ? format(thread.data.preview.images[0].resolutions[0].url) : null;
          return (
          <Thread  
            thumbnail={thumbnail} 
            title={format(thread.data.title)}
            url={thread.data.url} />
          )
        })}
      </ul>

  )
}

export default threadsList;