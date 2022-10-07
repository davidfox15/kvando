import React from 'react';
import PostList from './PostList';
import CustomLoader from './UI/loader/CustomLoader';
import { CSSTransition } from 'react-transition-group';
import useMount from '../hooks/useMount';

const AnimatedPostList = ({ isPostLoading, deletePost, title, sortedPosts }) => {
  const { mounted } = useMount(isPostLoading);

  return (
    <>
      {isPostLoading ? (
        <CustomLoader />
      ) : (
        <CSSTransition in={mounted} timeout={300} classNames="PostList" mountOnEnter unmountOnExit>
          <PostList deletePostCallback={deletePost} title={title} posts={sortedPosts} />
        </CSSTransition>
      )}
    </>
  );
};

export default AnimatedPostList;
