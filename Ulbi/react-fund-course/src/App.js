import { useState, useEffect } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';
import CustomModal from './components/UI/modal/CustomModal';
import CustomButton from './components/UI/button/CustomButton';
import { usePosts } from './hooks/usePosts';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json =>
        json.map(item => ({
          id: item.id,
          title: item.title,
          text: item.body,
        }))
      )
      .then(posts => setPosts(posts))
      .catch(e => console.log(e.message));
  }, []);

  const [modal, setModal] = useState(false);

  const [filter, setFilter] = useState({ sort: '', search: '' });

  const sortedPosts = usePosts(posts, filter.sort, filter.search);

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
