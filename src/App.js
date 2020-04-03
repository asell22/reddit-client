import React, { useState, useEffect } from 'react';
import { ThreadsList, PaginationButtons as Buttons } from './components';
import './App.css';

function App() {
  const [threads, setThreads] = useState([]);
  const [beforeChild, setBeforeChild] = useState('');
  const [afterChild, setAfterChild] = useState('');

  useEffect(() => {
    fetch('https://www.reddit.com/r/subreddit/new.json?sort=new')
      .then(response =>  response.json())
      .then(data => {
        setThreads(data.data.children)
        setBeforeChild(data.data.before)
        setAfterChild(data.data.after)
      })
      .catch(err => console.log(err));
  }, [])

  
  return (
      <div className="App">
        <div className="top">
          <h1>Reddit Threads</h1>
          <Buttons
            className="buttons" 
            before={beforeChild} 
            after={afterChild}
            setBeforeChild={setBeforeChild}
            setAfterChild={setAfterChild} 
            setThreads={setThreads}
          />
        </div>
        <ThreadsList threads={threads} /> 
      </div>
  );
}

export default App;
