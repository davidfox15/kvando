import React, { useEffect, useState } from 'react';
import PostList from './PostList';
import CustomLoader from './UI/loader/CustomLoader';
import { CSSTransition } from 'react-transition-group';

const AnimatedPostList = ({ isPostsLoading, deletePost, title, sortedPosts }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (isPostsLoading) {
      setMounted(false);
    } else {
      setMounted(true);
    }
  }, [isPostsLoading]);

  return (
    <>
      {isPostsLoading ? (
        <CustomLoader />
      ) : (
        <CSSTransition in={mounted} timeout={500} classNames="PostList" mountOnEnter unmountOnExit>
          <PostList deletePostCallback={deletePost} title={title} posts={sortedPosts} />
        </CSSTransition>
      )}
    </>
  );
};

export default AnimatedPostList;
