import { useState, useEffect } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';
import CustomModal from './components/UI/modal/CustomModal';
import CustomButton from './components/UI/button/CustomButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostServiece';

function App() {
  const [posts, setPosts] = useState([]);

  const [modal, setModal] = useState(false);

  const [filter, setFilter] = useState({ sort: '', search: '' });

  const sortedPosts = usePosts(posts, filter.sort, filter.search);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const posts = await PostService.getAll();
    setPosts(posts);
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
