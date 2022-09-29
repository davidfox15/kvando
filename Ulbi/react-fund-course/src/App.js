import { useState } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, name: 'React', text: 'A JavaScript library for building user interfaces.' },
    {
      id: 2,
      name: 'Vue',
      text: 'An approachable, performant and versatile framework for building web user interfaces.',
    },
    { id: 3, name: 'Angular', text: 'Angular is a platform for building mobile and desktop web applications.' },
    {
      id: 4,
      name: 'JS Vanilla',
      text: 'Vanilla JS is a fast, lightweight, cross-platform framework for building incredible, powerful JavaScript applications.',
    },
  ]);

  function getLastID() {
    const lastID = posts.reduce((res, post) => (res < post.id ? post.id : res), 0);
    return lastID + 1;
  }

  function addNewPost(post) {
    post.id = getLastID();
    setPosts([...posts, post]);
  }

  return (
    <div>
      <PostForm addPostCallback={addNewPost} />
      <PostList title={'Programming Languages'} posts={posts} />
    </div>
  );
}

export default App;
