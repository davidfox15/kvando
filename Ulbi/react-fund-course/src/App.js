import { useMemo, useState } from 'react';
import './App.css';
import ErrorBox from './components/ErrorBox';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';

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

  const [filter, setFilter] = useState({ sort: '', search: '' });

  const sortedPosts = useMemo(() => getSortedPosts(), [filter.sort, posts, filter.search]);

  function getLastID() {
    const lastID = posts.reduce((res, post) => (res < post.id ? post.id : res), 0);
    return lastID + 1;
  }

  function compareStringsAndNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a === b ? 0 : a > b ? 1 : -1;
    } else {
      return a.localeCompare(b);
    }
  }

  function filterStringInclude(find, ...items) {
    let res = false;
    items.forEach(item => {
      if (item.toLowerCase().includes(find.toLowerCase())) res = true;
    });
    return res;
  }

  function getSortedPosts() {
    let sortedPosts = [...posts];
    if (filter.search)
      sortedPosts = [...sortedPosts].filter(post => filterStringInclude(filter.search, post.text, post.title));
    if (filter.sort)
      sortedPosts = [...sortedPosts].sort((a, b) => compareStringsAndNumbers(a[filter.sort], b[filter.sort]));
    return sortedPosts;
  }

  function getFoundPosts() {
    if (filter.search) return [...posts].filter(post => filterStringInclude(filter.search, post.text, post.title));
    return posts;
  }

  function addNewPost(post) {
    post.id = getLastID();
    setPosts([...posts, post]);
  }

  function deletePost(post) {
    setPosts(posts.filter(currentPost => currentPost.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm addPostCallback={addNewPost} />
      <hr className="Divide" />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedPosts.length !== 0 ? (
        <PostList deletePostCallback={deletePost} title={'Programming Languages'} posts={sortedPosts} />
      ) : (
        <ErrorBox errorMessage={'Нет постов'} />
      )}
    </div>
  );
}

export default App;
