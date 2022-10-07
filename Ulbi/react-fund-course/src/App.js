import { useState, useEffect } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import AnimatedPostList from './components/AnimatedPostList';
import CustomModal from './components/UI/modal/CustomModal';
import CustomButton from './components/UI/button/CustomButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import useFetching from './hooks/useFetching';
import usePagination from './hooks/usePagination';
import PostListNavigation from './components/PostListNavigation';

function App() {
  const [modal, setModal] = useState(false);

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', search: '' });
  const sortedPosts = usePosts(posts, filter.sort, filter.search);

  const [totalCount, setTotalCount] = useState(100);
  const [limit, setLimit] = useState(10);
  const [chosenPage, setChosenPage] = useState(1);

  const pages = usePagination(limit, totalCount);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getPage(limit, chosenPage);
    setPosts(posts);
  }, []);

  useEffect(() => {
    setPosts(fetchPosts());
  }, [chosenPage]);

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
      <AnimatedPostList
        isPostsLoading={isPostsLoading}
        deletePost={deletePost}
        title={'Programming Languages'}
        sortedPosts={sortedPosts}
        nav={{
          pages,
          setChosenPage,
        }}
      />
      {/* <PostListNavigation nav={{
        pages,
        setChosenPage
      }} /> */}
    </div>
  );
}

export default App;
