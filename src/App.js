import React, { useState, useEffect } from 'react';


import { ThreadsList } from './components';
import './App.css';

function App() {
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    fetch('https://www.reddit.com/r/subreddit/new.json?sort=new')
      .then(response =>  response.json())
      .then(data => {
        console.log('data:', data)
        setThreads(data.data.children)
      })
  }, [])
  return (
      <div className="App">
        <h1>Reddit Threads</h1>
        <ThreadsList threads={threads} /> 
      </div>
  );
}

export default App;
