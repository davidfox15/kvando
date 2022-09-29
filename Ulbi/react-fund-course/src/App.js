import { useState } from 'react';
import './App.css';
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, name: 'React', text: 'A JavaScript library for building user interfaces' },
    {
      id: 2,
      name: 'Vue',
      text: 'An approachable, performant and versatile framework for building web user interfaces.',
    },
    { id: 3, name: 'Angular', text: 'Angular is a platform for building mobile and desktop web applications.' },
    { id: 4, name: 'JS Vanilla', text: 'Использование простого JavaScript без каких-либо дополнительных библиотек' },
  ]);

  const array = ['abc', 'fdsa', 'fasdfdas'];

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
