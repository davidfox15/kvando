import { useState } from 'react';
import './App.css';
import ErrorBox from './components/ErrorBox';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import CustomSelect from './components/UI/select/CustomSelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'React', text: 'A JavaScript library for building user interfaces.' },
    {
      id: 2,
      title: 'Vue',
      text: 'An approachable, performant and versatile framework for building web user interfaces.',
    },
    { id: 3, title: 'Angular', text: 'Angular is a platform for building mobile and desktop web applications.' },
    {
      id: 4,
      title: 'JS Vanilla',
      text: 'Vanilla JS is a fast, lightweight, cross-platform framework for building incredible, powerful JavaScript applications.',
    },
  ]);

  const [selectedSort, setSelectSort] = useState('');

  function getLastID() {
    const lastID = posts.reduce((res, post) => (res < post.id ? post.id : res), 0);
    return lastID + 1;
  }

  function addNewPost(post) {
    post.id = getLastID();
    setPosts([...posts, post]);
  }

  function deletePost(post) {
    setPosts(posts.filter(currentPost => currentPost.id !== post.id));
  }

  function sortPosts(sort) {
    setSelectSort(sort);
    setPosts(
      [...posts].sort((a, b) => {
        if (typeof a[sort] === 'number' && typeof b[sort] === 'number') {
          if (a[sort] < b[sort]) return -1;
          if (a[sort] > b[sort]) return 1;
          return 0;
        } else {
          return a[sort].localeCompare(b[sort]);
        }
      })
    );
  }

  return (
    <div className="App">
      <PostForm addPostCallback={addNewPost} />
      <CustomSelect
        defaultValue={'Сортировка по'}
        options={[
          { value: 'id', name: 'По id' },
          { value: 'title', name: 'По заголовку' },
          { value: 'text', name: 'По тексту' },
        ]}
        value={selectedSort}
        onChange={sortPosts}
      />
      {posts.length !== 0 ? (
        <PostList deletePostCallback={deletePost} title={'Programming Languages'} posts={posts} />
      ) : (
        <ErrorBox errorMessage={'Нет постов'} />
      )}
    </div>
  );
}

export default App;
