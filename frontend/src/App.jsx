import React, { useState, useEffect } from 'react';

import './App.scss';
import Navbar from './components/navbar/Navbar';
import { getAllPost } from '../src/services/postService';
import Post from './components/post/Post';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async function loadData() {
      const results = await getAllPost();
      console.log('result', results);
      setPosts(results);
    })();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {posts && posts.map(post => <Post {...post} />)}
      </div>
    </div>
  );
};

export default App;
