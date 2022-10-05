import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ErrorBox from './ErrorBox';
import Post from './Post';
import './PostList.css';

export default function PostList({ title, posts, deletePostCallback }) {
  return (
    <div>
      <h1 className="ListTitle">{title}</h1>
      <TransitionGroup>
        {posts.length > 0 ? (
          posts.map(post => (
            <CSSTransition key={post.id} timeout={500} classNames='post'>
              <Post deletePostCallback={deletePostCallback} key={post.id} post={post} />
            </CSSTransition>
          ))
        ) : (
          <ErrorBox errorMessage={'Нет постов'} />
        )}
      </TransitionGroup>
    </div>
  );
}
