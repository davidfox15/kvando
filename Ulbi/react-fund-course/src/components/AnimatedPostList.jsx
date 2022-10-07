import React, { useEffect, useState } from 'react';
import PostList from './PostList';
import CustomLoader from './UI/loader/CustomLoader';
import { CSSTransition } from 'react-transition-group';
import PostListNavigation from './PostListNavigation';

const AnimatedPostList = ({ isPostsLoading, deletePost, title, sortedPosts, nav }) => {
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
          <div>
            <PostList deletePostCallback={deletePost} title={title} posts={sortedPosts} />
            <PostListNavigation nav={nav} />
          </div>
        </CSSTransition>
      )}
    </>
  );
};

export default AnimatedPostList;
