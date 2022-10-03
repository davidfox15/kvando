import { useMemo, useState } from 'react';
import './App.css';
import ErrorBox from './components/ErrorBox';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import CustomSelect from './components/UI/select/CustomSelect';
import CustomInput from './components/UI/input/CustomInput';

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
  const [search, setSearch] = useState('');

  const sortedPosts = useMemo(() => getSortedPosts(), [selectedSort, posts, search])

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
    if (search) sortedPosts = [...sortedPosts].filter(post => filterStringInclude(search, post.text, post.title));
    if (selectedSort)
      sortedPosts = [...sortedPosts].sort((a, b) => compareStringsAndNumbers(a[selectedSort], b[selectedSort]));
    return sortedPosts;
  }

  function getFoundPosts() {
    if (search) return [...posts].filter(post => filterStringInclude(search, post.text, post.title));
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
      <div>
        <CustomInput type="text" value={search} onChange={event => setSearch(event.target.value)} />
        <CustomSelect
          defaultValue={'Сортировка по'}
          options={[
            { value: 'id', name: 'По id' },
            { value: 'title', name: 'По заголовку' },
            { value: 'text', name: 'По тексту' },
          ]}
          value={selectedSort}
          onChange={sort => setSelectSort(sort)}
        />
      </div>
      {sortedPosts.length !== 0 ? (
        <PostList deletePostCallback={deletePost} title={'Programming Languages'} posts={sortedPosts} />
      ) : (
        <ErrorBox errorMessage={'Нет постов'} />
      )}
    </div>
  );
}

export default App;
