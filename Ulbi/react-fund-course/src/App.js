import { useMemo, useState } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';
import { compare, includeString } from './logic/filter';
import CustomModal from './components/UI/modal/CustomModal';
import CustomButton from './components/UI/button/CustomButton';

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

  const [modal, setModal] = useState(false);

  const [filter, setFilter] = useState({ sort: '', search: '' });

  const sortedPosts = useMemo(() => getPosts(), [filter.sort, posts, filter.search]);

  function getPosts() {
    let sortedPosts = [...posts];
    sortedPosts = getFoundPosts(sortedPosts);
    sortedPosts = getSortedPosts(sortedPosts);
    return sortedPosts;
  }

  function getFoundPosts(tempPosts) {
    if (filter.search) return [...tempPosts].filter(post => includeString(filter.search, post.text, post.title));
    return tempPosts;
  }

  function getSortedPosts(tempPosts) {
    if (filter.sort)
      return [...tempPosts].sort((post1, post2) => {
        const key = filter.sort;
        return compare(post1[key], post2[key]);
      });
    return tempPosts;
  }

  function addPost(post) {
    setModal(false);
    post.id = getLastID();
    setPosts([...posts, post]);
  }

  function getLastID() {
    const lastID = posts.reduce((res, post) => (res < post.id ? post.id : res), 0);
    return lastID + 1;
  }

  function deletePost(post) {
    setPosts(posts.filter(currentPost => currentPost.id !== post.id));
  }

  return (
    <div className="App">
      <CustomButton onClick={() => setModal(prev => !prev)}>Добавить пост</CustomButton>
      <CustomModal visible={modal} setVisible={setModal}>
        <PostForm addPost={addPost} />
      </CustomModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList deletePostCallback={deletePost} title={'Programming Languages'} posts={sortedPosts} />
    </div>
  );
}

export default App;
